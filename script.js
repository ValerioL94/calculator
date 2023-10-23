const display = document.getElementById("display");
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const clearAll = document.getElementById("empty");
const clearEntry = document.getElementById("undo");
const equals = document.getElementById("equal");
const decimal = document.getElementById("decimal");

let firstNum = "";
let secondNum = "";
let operator = "";
let result = "";

window.addEventListener("keydown", keyboardInput);

function keyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) setNumber(e.key);
    else if (e.key === "Backspace") undo();
    else if (e.key === "Escape") reset();
    else if (e.key === ".") setPoint();
    else if (e.key === "=" || e.key === "Enter") giveResult();
    else if (e.key === "+" || e.key === "-" ||
        e.key === "*" || e.key === "/") setOperator(e.key);
};

numbers.forEach(number => {
    number.addEventListener("click", () => setNumber(number.value));
});

function setNumber(num) {
    if (operator === "") {
        firstNum += num;
        display.textContent += num;
    } else {
        secondNum += num;
        display.textContent += num;
    }
}

operators.forEach(op => {
    op.addEventListener("click", () => setOperator(op.value));
});

function setOperator(op) {
    if (firstNum === "" || operator !== "" && secondNum === "") {
        // do nothing
    } else if (operator === "") {
        operator = op;
        if (op === "/") {
            display.textContent += "÷";
        } else if (op === "*") {
            display.textContent += "x";
        } else display.textContent += op;
    } else if (operator !== "" && secondNum !== "") {
        operate(firstNum, operator, secondNum);
        operator = op;
        if (op === "/") {
            display.textContent += "÷";
        } else if (op === "*") {
            display.textContent += "x";
        } else display.textContent += op;
    };
};



clearAll.addEventListener("click", () => reset());

function reset() {
    display.textContent = "";
    firstNum = "";
    secondNum = "";
    operator = "";
    result = "";
};

clearEntry.addEventListener("click", () => undo());

function undo() {
    if (secondNum !== "") {
        secondNum = secondNum.slice(0, -1);
    } else if (operator !== "") {
        operator = "";
    } else {
        firstNum = firstNum.slice(0, -1);
    }
    display.textContent = display.textContent.slice(0, -1);
};

decimal.addEventListener("click", () => setPoint());

function setPoint() {
    if (firstNum !== "" && !firstNum.includes(".") && operator === "") {
        firstNum += decimal.value;
        display.textContent += decimal.value;
    } else if (secondNum !== "" && !secondNum.includes(".")) {
        secondNum += decimal.value;
        display.textContent += decimal.value;
    }
};

equals.addEventListener("click", () => giveResult());

function giveResult() {
    if (secondNum !== "") {
        operate(firstNum, operator, secondNum);
    } else {
        // do nothing
    }
};

function operate(firstNum, operator, secondNum) {
    let a = parseFloat(firstNum);
    let b = parseFloat(secondNum);
    switch (operator) {
        case "+":
            result = Math.round((a + b) * 100) / 100;
            nextOperation();
            break;
        case "-":
            result = Math.round((a - b) * 100) / 100;
            nextOperation();
            break;
        case "*":
            result = Math.round((a * b) * 100) / 100;
            nextOperation();
            break;
        case "/":
            if (b == 0) {
                alert("Do not divide by 0, thank you.");
                reset();
            }
            else {
                result = Math.round((a / b) * 100) / 100;
                nextOperation();
            }
    };
};

function nextOperation() {
    display.textContent = result;
    firstNum = result.toString();
    secondNum = "";
    operator = "";
    result = "";
};