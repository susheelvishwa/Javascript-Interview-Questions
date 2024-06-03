const Btn = document.getElementById("Btn");
const Btn1 = document.getElementById("Btn1");
const Btn2 = document.getElementById("Btn2");
const Btn3 = document.getElementById("Btn3");
const Btn4 = document.getElementById("Btn4");
const Btn5 = document.getElementById("Btn5");
const Btn6 = document.getElementById("Btn6");
const Btn7 = document.getElementById("Btn7");
const Btn8 = document.getElementById("Btn8");
const Btn9 = document.getElementById("Btn9");

Btn.addEventListener("click", function () {
  console.log("click event called");
});

Btn1.addEventListener("mouseover", function () {
  console.log("mouseover event called");
});

Btn2.addEventListener("keydown", function () {
  console.log("keydown event called");
});

Btn3.addEventListener("keyup", function () {
  console.log("keyup event called");
});

Btn4.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents form from submitting
  console.log("submit event called");
});

Btn5.addEventListener("focus", function () {
  console.log("focus event called");
});

Btn6.addEventListener("blur", function () {
  console.log("blur event called");
});

Btn7.addEventListener("change", function () {
  console.log("change event called");
});

// 'load' event should be attached to window or image elements
window.addEventListener("load", function () {
  console.log("load event called");
});

// 'resize' event should be attached to the window
window.addEventListener("resize", function () {
  console.log("resize event called");
});

// If you want to handle image load specifically
Btn8.addEventListener("load", function () {
  console.log("image load event called");
});
