const wpmDisplay = document.getElementById('wpm');

chrome.runtime.onMessage.addListener((message) => {
  if (message.wpm !== undefined) {
    wpmDisplay.textContent = message.wpm;
  }
});
