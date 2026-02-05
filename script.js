let firstNumber = "";
let secondNumber = "";
let operator = "";

const display = document.querySelector("#display");

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    const btn = event.currentTarget;

    if (btn.classList.contains("btn-number")) {
      const value = btn.dataset.value;
      //Run specific number logic here
      updateNumber(value);
    } else if (btn.classList.contains("operator")) {
      const value = btn.dataset.value;

      //Run operator logic here
      updateOperator(value);
    } else if (btn.classList.contains("clear")) {
      clearCalculator();
    } else if (btn.classList.contains("equal")) {
      operate();
    }
  });
});

function updateNumber(value) {
  if (operator == "") {
    if (value == "." && firstNumber.includes(".")) return;
    firstNumber += value;
    display.value = firstNumber;
    //return firstNumber
  } else {
    if (value == "." && secondNumber.includes(".")) return;
    secondNumber += value;
    display.value = firstNumber + operator + secondNumber;
    //return firstNumber
  }
}

function updateOperator(value) {
  if (secondNumber != "") {
    operate();
  }
  operator = value;
  display.value = firstNumber + operator;
}

function clearCalculator() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  display.value = 0;
}

function operate() {
  const a = Number(firstNumber);
  const b = Number(secondNumber);
  let result;
  switch (operator) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "*":
      result = multiply(a, b);
      break;
    case "/":
      result = b === 0 ? "Error" : divide(a, b);
      break;
    default:
      break;
  }
  result = roundNumber(result);
  display.value = result;
  firstNumber = result;
  secondNumber = "";
}

function roundNumber(number) {
  if (number % 1 === 0) {
    return number.toFixed(0);
  } else {
    return number.toFixed(1);
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
