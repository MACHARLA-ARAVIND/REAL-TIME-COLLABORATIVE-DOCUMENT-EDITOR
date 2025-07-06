let activeTabId = null;
let activeStartTime = null;

chrome.tabs.onActivated.addListener(activeInfo => {
  recordTime();
  activeTabId = activeInfo.tabId;
  activeStartTime = Date.now();
});

chrome.windows.onFocusChanged.addListener(() => {
  recordTime();
  activeTabId = null;
  activeStartTime = null;
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tabId === activeTabId && changeInfo.status === 'complete') {
    activeStartTime = Date.now();
  }
});

function recordTime() {
  if (activeTabId !== null && activeStartTime !== null) {
    chrome.tabs.get(activeTabId, (tab) => {
      if (chrome.runtime.lastError || !tab?.url) return;
      const timeSpent = Date.now() - activeStartTime;
      const domain = new URL(tab.url).hostname;
      const userId = "user123"; // static for demo

      chrome.storage.local.get([domain], (data) => {
        const total = data[domain] || 0;
        chrome.storage.local.set({ [domain]: total + timeSpent });
      });

      fetch('http://localhost:3000/api/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, domain, timeSpent })
      });
    });
  }
}
