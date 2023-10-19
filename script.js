const display = document.getElementById("display");
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const clearAll = document.getElementById("empty");
const undo = document.getElementById("undo");
const result = document.getElementById("equal")

numbers.forEach(number => {
    number.addEventListener("click", (e) => {
        if (operator === "") {
            firstNum += e.target.value;
            display.textContent += number.value;
        } else {
            secondNum += e.target.value;
            display.textContent += number.value;
        }
    });
});

operators.forEach(op => {
    op.addEventListener("click", (e) => {
        operator = e.target.value;
        display.textContent += op.value;
    });
});

clearAll.addEventListener("click", () => {
    display.textContent = "";
    firstNum = "";
    secondNum = "";
    operator = "";
});

undo.addEventListener("click", () => {
    if (secondNum !== "") {
        secondNum = secondNum.slice(0, -1);
    } else if (operator !== "") {
        operator = "";
    } else {
        firstNum = firstNum.slice(0, -1);
    }
    display.textContent = display.textContent.slice(0, -1);
});

result.addEventListener("click", operate);

let firstNum = "";
let secondNum = "";
let operator = "";

function add(a, b) { return (a + b) };
function subtract(a, b) { return (a - b) };
function multiply(a, b) { return (a * b) };
function divide(a, b) {
    if (b == 0) { return "invalid operation" }
    else { return (a / b) }
};

function operate(firstNum, operator, secondNum) {
    if (operator === "+") { console.log(add(firstNum, secondNum)) }
    else if (operator === "-") { return subtract(firstNum, secondNum) }
    else if (operator === "*") { return multiply(firstNum, secondNum) }
    else if (operator === "/") { return divide(firstNum, secondNum) }
    else { return "invalid operator" }
};



