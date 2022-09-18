console.log("[proposal] init");

var height = window.innerHeight;
var width = window.innerWidth;

console.log("[proposal] height", height);
console.log("[proposal] width", width);

window.onresize = function () {
  height = window.innerHeight;
  width = window.innerWidth;

  console.log("[proposal#onresize] height", height);
  console.log("[proposal#onresize] width", width);
}

const ButtonYes = document.getElementById("proposal-yes");
ButtonYes.addEventListener("click", () => {
  location.href = "yes/index.html"
})

const ButtonNo = document.getElementById("proposal-no");
ButtonNo.addEventListener("click", () => {
  console.log("[proposal#click] height", height);
  console.log("[proposal#click] width", width);

  const randomHeight = Math.floor(Math.random() * (height - 61) + 0);
  const randomWidth = Math.floor(Math.random() * (width - 80) + 0);;

  ButtonNo.style.position = "absolute";
  ButtonNo.style.top = `${randomHeight}px`; //? height
  ButtonNo.style.left = `${randomWidth}px`; //? width
})
