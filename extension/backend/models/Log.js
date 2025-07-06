const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
  userId: String,
  domain: String,
  timeSpent: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Log', LogSchema);
