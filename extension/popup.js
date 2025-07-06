chrome.storage.local.get(null, (data) => {
  const report = document.getElementById('report');
  const entries = Object.entries(data).sort((a, b) => b[1] - a[1]);
  if (entries.length === 0) {
    report.innerHTML = "<li>No data yet.</li>";
    return;
  }
  for (const [domain, ms] of entries) {
    const mins = Math.round(ms / 60000);
    const li = document.createElement('li');
    li.textContent = `${domain}: ${mins} min`;
    report.appendChild(li);
  }
});
