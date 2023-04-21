let startTime = null;
let wordsTyped = 0;
let wpm = 0;

function countWords(str) {
  return str.trim().split(/\s+/).length;
}

function calculateWPM(words, elapsedTime) {
  const minutes = elapsedTime / 60000;
  return Math.round(words / minutes);
}

function onInputEvent(e) {
  if (startTime === null) {
    startTime = Date.now();
  }

  const inputElement = e.target;
  const text = inputElement.value;
  wordsTyped = countWords(text);

  const elapsedTime = Date.now() - startTime;
  wpm = calculateWPM(wordsTyped, elapsedTime);

  chrome.runtime.sendMessage({ wpm });
}

document.addEventListener('input', onInputEvent, true);
