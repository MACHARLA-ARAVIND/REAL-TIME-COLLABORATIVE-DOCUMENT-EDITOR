const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/productivity', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"));

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const Log = require('./models/Log');

app.post('/api/log', async (req, res) => {
  const { userId, domain, timeSpent } = req.body;
  if (!userId || !domain || !timeSpent) return res.sendStatus(400);
  await Log.create({ userId, domain, timeSpent });
  res.sendStatus(200);
});

app.get('/api/report/:userId', async (req, res) => {
  const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const logs = await Log.aggregate([
    { $match: { userId: req.params.userId, timestamp: { $gte: oneWeekAgo } }},
    { $group: { _id: "$domain", totalTime: { $sum: "$timeSpent" } }}
  ]);
  res.json(logs);
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
