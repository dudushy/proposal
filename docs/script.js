console.log("[proposal] init");

var height = window.innerHeight;
var width = window.innerWidth;

var count = 0;
const spanCount = document.getElementById("count-span");
console.log(spanCount);

console.log("[proposal] height", height);
console.log("[proposal] width", width);

window.onresize = function () {
  height = window.innerHeight;
  width = window.innerWidth;

  console.log("[proposal#onresize] height", height);
  console.log("[proposal#onresize] width", width);
}

const buttonYes = document.getElementById("proposal-yes");
buttonYes.addEventListener("click", () => {
  location.href = "yes/"
})

const buttonNo = document.getElementById("proposal-no");
buttonNo.addEventListener("click", () => {
  console.log("[proposal#click] height", height);
  console.log("[proposal#click] width", width);

  const randomHeight = Math.floor(Math.random() * (height - 61) + 0);
  const randomWidth = Math.floor(Math.random() * (width - 80) + 0);
  console.log("[proposal#click] randomHeight", randomHeight);
  console.log("[proposal#click] randomWidth", randomWidth);

  buttonNo.style.position = "absolute";
  buttonNo.style.top = `${randomHeight}px`; //? height
  buttonNo.style.left = `${randomWidth}px`; //? width

  count++;
  if (count < 10) {
    spanCount.textContent = `0${count}`;
  } else {
    spanCount.textContent = count;
  }
})
