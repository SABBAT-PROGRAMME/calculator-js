// selections
const input = document.querySelector("input");
let btnBlock = document.querySelector(".btn-block");
let btn7 = document.querySelector(".btn-7");
let btn8 = document.querySelector(".btn-8");
let btn9 = document.querySelector(".btn-9");
let btnDivision = document.querySelector(".btn-division");
let btn4 = document.querySelector(".btn-4");
let btn5 = document.querySelector(".btn-5");
let btn6 = document.querySelector(".btn-6");
let btnMultplication = document.querySelector(".btn-multplication");
let btn1 = document.querySelector(".btn-1");
let btn2 = document.querySelector(".btn-2");
let btn3 = document.querySelector(".btn-3");
let btnMoin = document.querySelector(".btn-moin");
let btn0 = document.querySelector(".btn-0");
let btnDot = document.querySelector(".btn-dot");
let btnClear = document.querySelector(".btn-clear");
let btnEqual = document.querySelector(".btn-equal");

// event listeners
btnBlock.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    input.value += e.target.innerText;
  }
});

btnEqual.addEventListener("click", function () {
  input.value = eval(input.value);
});

btnClear.addEventListener("click", function () {
  input.value = "";
});
