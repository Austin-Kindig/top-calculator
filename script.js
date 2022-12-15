const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const equalButton = document.querySelector("#enter");
const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll('.number');


function updateDisplay() {

}

numberButtons.forEach(button => button.addEventListener('click',() => {
    display.textContent = button.innerText;
    //display.textContent = buttonContent;
}))




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