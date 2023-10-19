function add(a, b) { return a + b };
function subtract(a, b) { return a - b };
function multiply(a, b) { return a * b };
function divide(a, b) {
    if (b == 0) { return "invalid operation" }
    else { return a / b }
};

let firstNum;
let operator;
let secondNum;

function operate(firstNum, operator, secondNum) {
    if (operator == "+") { return add(firstNum, secondNum) }
    else if (operator == "-") { return subtract(firstNum, secondNum) }
    else if (operator == "*") { return multiply(firstNum, secondNum) }
    else if (operator == "/") { return divide(firstNum, secondNum) }
    else { return "invalid operator" }
};