let display = document.getElementById("display");

let firstNumber = "";
let secondNumber = "";
let operator = "";

function calculate() {
    let a = Number(firstNumber);
    let b = Number(secondNumber);
    let result;

    if (operator === "+") {
        result = a + b;
    } else if (operator === "-") {
        result = a - b;
    } else if (operator === "*") {
        result = a * b;
    } else if (operator === "/") {
        result = a / b;
    }

    display.value = result;
}
