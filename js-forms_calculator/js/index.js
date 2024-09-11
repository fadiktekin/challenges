console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numberA = Number.parseInt(event.target.elements.numberA.value);
  const numberB = Number.parseInt(event.target.elements.numberB.value);
  const operator = event.target.elements.operator.value;

  let result;
  if (operator === "addition") {
    result = add(numberA, numberB);
  } else if (operator == "subtraction") {
    result = subtract(numberA, numberB);
  } else if (operator == "multiplication") {
    result = multiply(numberA, numberB);
  } else {
    result = divide(numberA, numberB);
  }

  resultOutput.textContent = result;
});
