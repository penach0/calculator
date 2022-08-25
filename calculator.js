const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let displayValue;
let operator;
let firstOperand;
let secondOperand;

const display = document.querySelector('#display');

const nums = [...document.getElementsByClassName('number')];
nums.forEach(num => num.addEventListener('click', numbers));

const operators = [...document.getElementsByClassName('operator')];
operators.forEach(operator => operator.addEventListener('click', storeValues))

function storeValues(e){
    operator = e.target.textContent;
    firstOperand = displayValue;
}

function numbers(e){
    display.textContent += e.target.textContent;
    displayValue = display.textContent;
}


function operate(a, b, operation){
    switch(operation){
        case '+': return add(a,b);
        case '-': return subtract(a,b);
        case '*': return multiply(a,b);
        case '/': return divide(a,b);
    };
}
