const add = (a, b) => +a + +b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let operator;
let storedValue;
let displayValue;

const display = document.querySelector('#display');
const firstOperand = document.createElement('p');
const secondOperand = document.createElement('p');
const newOperand = document.createElement('p');

const nums = [...document.getElementsByClassName('number')];
nums.forEach(num => num.addEventListener('click', numbers));

const operators = [...document.getElementsByClassName('operator')];
operators.forEach(operator => operator.addEventListener('click', storeValues));


function numbers(e){
    if (!operator) {
        firstOperand.textContent += e.target.textContent;
        display.appendChild(firstOperand);
    } else if(operator === '='){
        newOperand.textContent += e.target.textContent;
        firstOperand.textContent = newOperand.textContent;
        newOperand.textContent = '';
        operator = '';
        storedValue = '';
    } else{
        secondOperand.textContent += e.target.textContent;
        if(display.contains(firstOperand)) display.replaceChild(secondOperand, firstOperand);
    }   
}

function storeValues(e){
    if(!storedValue){
        storedValue = firstOperand.textContent;
    } else{
        operate(storedValue, secondOperand.textContent, operator);
    }
    operator = e.target.textContent;
}

function operate(a, b, operation){
    switch(operation){
        case '+':
            firstOperand.textContent = add(a,b);
            break;
        case '-':
            firstOperand.textContent = subtract(a,b);
            break;
        case '*':
            firstOperand.textContent = multiply(a,b);
            break;
        case '/':
            firstOperand.textContent = divide(a,b);
            break;
        case '=':
            return;
    };
    display.replaceChild(firstOperand, secondOperand);
    storedValue = firstOperand.textContent;
    secondOperand.textContent = '';
}
