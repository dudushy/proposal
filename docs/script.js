const PREFIX = "proposal";

//* Init
console.log(`[${PREFIX}] init`);

//* Vars
var DENY_MODE = "random-window"; //? random-window | random-content | dvd | hardcore

var count = 0;

var dvdStatus = false;

const spanCount = document.getElementById("count-span");

const selectMode = document.getElementById("mode-select");
const buttonYes = document.getElementById("proposal-yes");
const buttonNo = document.getElementById("proposal-no");

//! Main
setup();

//* Functions
function wait(ms) {
  console.log(`[${PREFIX}#wait] ms`, ms);

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(null);
    }, ms);
  });
}

function setup() {
  console.log(`[${PREFIX}#setup]`);

  console.log(`[${PREFIX}#setup] spanCount`, spanCount);

  selectMode.addEventListener("input", function() { updateDENY_MODE(selectMode.value) });
  console.log(`[${PREFIX}#setup] buttonYes`, buttonYes);

  buttonYes.addEventListener("click", triggerYes);
  console.log(`[${PREFIX}#setup] buttonYes`, buttonYes);

  buttonNo.addEventListener("click", triggerNo);
  console.log(`[${PREFIX}#setup] buttonNo`, buttonNo);
}

function updateDENY_MODE(mode) {
  DENY_MODE = mode;
  console.log(`[${PREFIX}#updateDENY_MODE] DENY_MODE`, DENY_MODE);
}

function triggerYes() {
  console.log(`[${PREFIX}#triggerYes] -> yes/`);
  location.href = "yes/";
}

function triggerNo() {
  executeDENY_MODE(buttonNo);

  count++;
  if (count < 10) {
    spanCount.textContent = `0${count}`;
  } else {
    spanCount.textContent = count;
  }
  console.log(`[${PREFIX}#triggerNo] count`, count);
}

function executeDENY_MODE(element) {
  console.log(`[${PREFIX}#executeDENY_MODE] DENY_MODE`, DENY_MODE);
  switch (DENY_MODE) {
    case "random-window":
      randomWindow(element);
      break;

    case "random-content":
      randomContent(element);
      break;

    case "dvd":
      dvd(element);
      break;

    default:
      randomWindow(element);
      break;
  }
}

function randomWindow(element) {
  const randomX = Math.floor(Math.random() * (window.innerWidth - 80) + 0);
  const randomY = Math.floor(Math.random() * (window.innerHeight - 61) + 0);

  console.log(`[${PREFIX}#randomWindow] randomX`, randomX);
  console.log(`[${PREFIX}#randomWindow] randomY`, randomY);

  element.style.position = "absolute";
  element.style.left = `${randomX}px`;
  element.style.top = `${randomY}px`;
  element.style.transition = "none";
}

function randomContent(element) {
  //! NOT DONE
  const divContent = document.getElementById("content");

  const randomX = Math.floor(Math.random() * (divContent.clientWidth - 80) + 0);
  const randomY = Math.floor(Math.random() * (divContent.clientHeight - 61) + 0);

  console.log(`[${PREFIX}#randomContent] randomX`, randomX);
  console.log(`[${PREFIX}#randomContent] randomY`, randomY);

  element.style.position = "absolute";
  element.style.left = `${randomX}px`;
  element.style.top = `${randomY}px`;
  element.style.transition = "none";
}

async function dvd(element) {
  dvdStatus = !dvdStatus;

  const TIMEOUT = 50;
  const AMOUNT = 20;
  const maxX = window.innerWidth - 80;
  const maxY = window.innerHeight - 61;

  const startX = Math.floor(Math.random() * (window.innerWidth - 80) + 0);
  const startY = Math.floor(Math.random() * (window.innerHeight - 61) + 0);

  console.log(`[${PREFIX}#dvd] startX`, startX);
  console.log(`[${PREFIX}#dvd] startY`, startY);

  var invertX = true;
  var invertY = true;
  var x = startX;
  var y = startY;
  while (dvdStatus) {
    if (!dvdStatus) break;
    element.style.position = "absolute";
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
    element.style.transition = `${TIMEOUT}ms`;

    if (invertX) { x += AMOUNT } else { x -= AMOUNT }
    if (invertY) { y += AMOUNT } else { y -= AMOUNT }

    if (x >= maxX || x <= 0) {
      invertX = !invertX;
    }

    if (y >= maxY || y <= 0) {
      invertY = !invertY;
    }

    await wait(TIMEOUT);
  }
}

function hardcore() { } //TODO
