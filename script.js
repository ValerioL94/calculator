const display = document.getElementById("display");
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const clearAll = document.getElementById("empty");
const undo = document.getElementById("undo");
const equals = document.getElementById("equal");
const decimal = document.getElementById("decimal");

let firstNum = "";
let secondNum = "";
let operator = "";
let result = "";
let firstDecimal = "";
let secondDecimal = "";

numbers.forEach(number => {
    number.addEventListener("click", (e) => {
        if (operator === "") {
            firstNum += e.target.value;
            display.textContent += e.target.value;
        } else {
            secondNum += e.target.value;
            display.textContent += e.target.value;
        }
    });
});

decimal.addEventListener("click", (e) => {
    if (firstDecimal === "" && firstNum !== "") {
        firstNum += e.target.value;
        display.textContent += e.target.value;
        firstDecimal = decimal.value;
    } else if (secondDecimal === "" && secondNum !== "") {
        secondNum += e.target.value;
        display.textContent += e.target.value;
        secondDecimal = decimal.value;
    }
});

operators.forEach(op => {
    op.addEventListener("click", (e) => {
        if (firstNum === "" || operator !== "" && secondNum === "") {
            // do nothing
        } else if (operator === "") {
            operator = e.target.value;
            display.textContent += e.target.value;
        } else if (operator !== "" && secondNum !== "") {
            operate(firstNum, operator, secondNum);
            operator = e.target.value;
            display.textContent += e.target.value;
        }
    });
});

clearAll.addEventListener("click", () => {
    display.textContent = "";
    firstNum = "";
    secondNum = "";
    operator = "";
    firstDecimal = "";
    secondDecimal = "";
});

undo.addEventListener("click", () => {
    if (secondNum.charAt(secondNum.length - 1) === ".") {
        secondDecimal = "";
    } else if (secondNum !== "") {
        secondNum = secondNum.slice(0, -1);
    } else if (operator !== "") {
        operator = "";
    } else if (firstNum.charAt(firstNum.length - 1) === ".") {
        firstDecimal = "";
    } else {
        firstNum = firstNum.slice(0, -1);
    }
    display.textContent = display.textContent.slice(0, -1);
});

equals.addEventListener("click", () => {
    if (secondNum !== "") {
        operate(firstNum, operator, secondNum);
    } else {
        // do nothing
    }
});



function add(a, b) {
    result = Math.round((a + b) * 100) / 100;
    display.textContent = result;
    firstNum = result.toString();
    operator = "";
    secondNum = "";
    firstDecimal = "";
    secondDecimal = "";
}
function subtract(a, b) {
    result = Math.round((a - b) * 100) / 100;
    display.textContent = result;
    firstNum = result.toString();
    operator = "";
    secondNum = "";
    firstDecimal = "";
    secondDecimal = "";
}
function multiply(a, b) {
    result = Math.round((a * b) * 100) / 100;
    display.textContent = result;
    firstNum = result.toString();
    operator = "";
    secondNum = "";
    firstDecimal = "";
    secondDecimal = "";
}
function divide(a, b) {
    if (b == 0) { display.textContent = "Invalid" }
    else {
        result = Math.round((a / b) * 100) / 100;
        display.textContent = result;
        firstNum = result.toString();
        operator = "";
        secondNum = "";
        firstDecimal = "";
        secondDecimal = "";
    }
};

function operate(firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            add(parseFloat(firstNum), parseFloat(secondNum));
            break;
        case "-":
            subtract(parseFloat(firstNum), parseFloat(secondNum));
            break;
        case "*":
            multiply(parseFloat(firstNum), parseFloat(secondNum));
            break;
        case "/":
            divide(parseFloat(firstNum), parseFloat(secondNum));
    }
};
