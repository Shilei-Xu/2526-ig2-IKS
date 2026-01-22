let lastTime = 0;
let interval = 60;

let charIndex = 0;
let displayText = "";

let startDelay = 1000;
let startTime = 0;

function resetText() {
  displayText = "";
  charIndex = 0;
  startTime = millis();   // 👈 reset 
  lastTime = startTime;
}


function drawTypewriter(txt, x, y, w, h) {

  if (millis() - startTime < startDelay) {
    text(displayText, x, y, w, h);
    return;
  }

  if (millis() - lastTime > interval && charIndex < txt.length) {
    displayText += txt.charAt(charIndex);
    charIndex++;
    lastTime = millis();
  }

  text(displayText, x, y, w, h);
}

