// selections
const input = document.querySelector("input");
let btnBlock = document.querySelector(".btn-block");

let btn0 = document.querySelector(".btn-0");
let btn1 = document.querySelector(".btn-1");
let btn2 = document.querySelector(".btn-2");
let btn3 = document.querySelector(".btn-3");
let btn4 = document.querySelector(".btn-4");
let btn5 = document.querySelector(".btn-5");
let btn6 = document.querySelector(".btn-6");
let btn7 = document.querySelector(".btn-7");
let btn8 = document.querySelector(".btn-8");
let btn9 = document.querySelector(".btn-9");

let btnMultplication = document.querySelector(".btn-multplication");
let btnDivision = document.querySelector(".btn-division");
let btnMoin = document.querySelector(".btn-moin");
let btnPlus = document.querySelector(".btn-plus");

let btnDot = document.querySelector(".btn-dot");
let btnClear = document.querySelector(".btn-clear");
let btnEqual = document.querySelector(".btn-equal");

// event listeners
// btnBlock.addEventListener("click", function (e) {
//   if (e.target.classList.contains("btn")) {
//     input.value += e.target.innerText;
//   }
// });

// btnEqual.addEventListener("click", function () {
//   input.value = eval(input.value);
// });

btnClear.addEventListener("click", function () {
  input.value = "";
});

btn1.addEventListener("click", function () {
  input.value += "1";
});
btn2.addEventListener("click", function () {
  input.value += "2";
});
btn3.addEventListener("click", function () {
  input.value += "3";
});
btn4.addEventListener("click", function () {
  input.value += "4";
});
btn5.addEventListener("click", function () {
  input.value += "5";
});

btn6.addEventListener("click", function () {
  input.value += "6";
});

btn7.addEventListener("click", function () {
  input.value += "7";
});

btn8.addEventListener("click", function () {
  input.value += "8";
});

btn9.addEventListener("click", function () {
  input.value += "9";
});

btn0.addEventListener("click", function () {
  input.value += "0";
});

btnDot.addEventListener("click", function () {
  input.value += ".";
  console.log(input.value);
});

btnPlus.addEventListener("click", function () {
  input.value += " + ";
});

btnMoin.addEventListener("click", function () {
  input.value += " - ";
});

btnDivision.addEventListener("click", function () {
  input.value += " / ";
});

btnMultplication.addEventListener("click", function () {
  input.value += " x ";
});

// btnEqual.addEventListener("click", function () {
//   input.value = eval(input.value);
// });

btnEqual.addEventListener("click", function () {
  const expression = input.value; // Récupérer l'expression saisie
  try {
    const result = eval(expression); // Calculer le résultat
    input.value = `${expression} = ${result}`; // Afficher l'expression et le résultat
  } catch (error) {
    input.value = "Erreur!"; // Gérer les erreurs (par ex. si l'utilisateur entre une expression invalide)
  }
});
