const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const equalButton = document.querySelector("#enter");
const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll('.number');
const decimalButton = document.querySelector('#point');

//initialize global variables
let input = [0];
let numberOne = 0;
let numberTwo = 0;
let operator = "";
let result = 0;

//initialize display
updateDisplay(0);

numberButtons.forEach(button => button.addEventListener('click',() => {
    //collect user input and display on gui
    input.push(button.innerText);
    updateDisplay(+input.join(''));
}));

decimalButton.addEventListener('click',() => {
    //permit user only one decimal per input string
    if (!input.includes(".")) {
        input.push(decimalButton.innerText);
        updateDisplay(+input.join(''));
    }
});

operatorButtons.forEach(button => button.addEventListener('click',() => {
    // allow user to string multiple expressions together at once
    if (operator != "") {
        result = evaluate();
        updateDisplay(`${result} ${button.innerText}`);
    } else {
    //(standard operator functionality) save input to var and take note of desired operator
    operator = button.innerText;
    updateDisplay(operator);
    if (numberOne === 0) {
        numberOne = +input.join('');
    }}
    operator = button.innerText;
    input = [0];
}));

equalButton.addEventListener('click',() => {
    //divide by zero error
    if ((operator == "/") && (+input.join("") == 0)) {
        reset();
        alert('https://tinyurl.com/2b7ms3wb')
        updateDisplay(";P");
    } else {
    //prefrom standard algebra and return result
    result = evaluate();
    updateDisplay(result);
    operator = "";
    }
});

clearButton.addEventListener('click',() => {
    //return variables to initialized state
    reset();
    updateDisplay("Cleared");
});

deleteButton.addEventListener('click',() => {
    //allow user to remove last digit from input
    input.pop();
    updateDisplay(+input.join(''));
});

//changes display text based on input
function updateDisplay(content) {
    display.textContent = content;
}

//preforms user-defined operation two different numbers
function evaluate () {
    numberTwo = +input.join('');
    result = operate(operator, numberOne, numberTwo)
    result = round(result, 3)
    numberOne = result;
    input = [0];
    return result;
}

//preforms and accurate rounding operation on floats
function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
};

//returns global variables to their initial values
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