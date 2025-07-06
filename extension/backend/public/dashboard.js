fetch('http://localhost:3000/api/report/user123')
  .then(res => res.json())
  .then(data => {
    const labels = data.map(d => d._id);
    const values = data.map(d => Math.round(d.totalTime / 60000));
    const ctx = document.getElementById('chart').getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Minutes Spent',
          data: values,
          backgroundColor: '#4CAF50'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Time Spent on Websites (Last 7 Days)'
          }
        }
      }
    });
  });
