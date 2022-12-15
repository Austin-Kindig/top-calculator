const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const equalButton = document.querySelector("#enter");
const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll('.number');
const decimalButton = document.querySelector('#point');

let input = [0];
let numberOne = 0;
let numberTwo = 0;
let operator = "";
let result = 0;

display.textContent = 0;

numberButtons.forEach(button => button.addEventListener('click',() => {
    input.push(button.innerText);
    display.textContent = +input.join('');
}));

decimalButton.addEventListener('click',() => {
    if (!input.includes(".")) {
        input.push(decimalButton.innerText);
        display.textContent = +input.join('');
    }
});

operatorButtons.forEach(button => button.addEventListener('click',() => {
    if (operator != "") {
        result = evaluate();
        display.textContent = `${result} ${button.innerText}`;
    } else {
    operator = button.innerText;
    display.textContent = operator;
    if (numberOne === 0) {
        numberOne = +input.join('');
    }}
    operator = button.innerText;
    input = [0];
}));

equalButton.addEventListener('click',() => {
    if ((operator == "/") && (+input.join("") == 0)) {
        reset();
        alert('https://tinyurl.com/2b7ms3wb')
        display.textContent = ";P";
    } else {
    result = evaluate();
    display.textContent = result;
    operator = "";
    }
});

clearButton.addEventListener('click',() => {
    reset();
    display.textContent = "Cleared";
});

deleteButton.addEventListener('click',() => {
    input.pop();
    display.textContent = +input.join('');
});



function updateDisplay() {

}

function evaluate () {
    numberTwo = +input.join('');
    result = operate(operator, numberOne, numberTwo)
    result = round(result, 3)
    numberOne = result;
    input = [0];
    return result;
}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
};

function reset() {
    input = [0];
    numberOne = 0;
    numberTwo = 0;
    operator = "";
    result = 0;
};


//preforms the desired operation based on defined operator and numbers
const operate = function(operator, numberOne, numberTwo) {
    if (operator == "+") {
        return add(numberOne, numberTwo);
    }
    if (operator == "-") {
        return subtract(numberOne, numberTwo);
    }
    if (operator == "*") {
        return multiply(numberOne, numberTwo);
    }
    if (operator == "/") {
        return divide(numberOne, numberTwo);
    }
    if (operator == "") {
        return 0;
    }
};


// takes two numbers and returns the sum
const add = function(numberOne, numberTwo) {
    return numberOne + numberTwo;
};
 
//takes two numbers and returns the difference
const subtract = function(numberOne, numberTwo) {
    return numberOne - numberTwo;
};

//takes two numbers and returns the product
const multiply = function(numberOne, numberTwo) {
    return numberOne * numberTwo;
};

//takes two numbers and returns the quotient
const divide = function(numberOne, numberTwo) {
    return numberOne / numberTwo;
};