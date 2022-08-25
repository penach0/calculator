const add = (a, b) => +a + +b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let displayValue;
let operator;
let firstOperand;
let secondOperand;

const display = document.querySelector('#display');
console.log(display);
const nums = [...document.getElementsByClassName('number')];
nums.forEach(num => num.addEventListener('click', numbers));

const operators = [...document.getElementsByClassName('operator')];
operators.forEach(operator => operator.addEventListener('click', storeValues))

const equal = document.querySelector('.equal');
console.log(equal);
equal.addEventListener('click', e =>
    display.textContent = operate(firstOperand, displayValue, operator));

function storeValues(e){
    operator = e.target.textContent;
    firstOperand = displayValue; 
    display.textContent = '';
}

function numbers(e){
    display.textContent += e.target.textContent;
    displayValue = display.textContent;
    /* if(operator) {
        display.textContent = '';
    } */
}


function operate(a, b, operation){
    console.log(a);
    console.log(b);
    console.log(operation);
    switch(operation){
        case '+': return add(a,b);
        case '-': return subtract(a,b);
        case '*': return multiply(a,b);
        case '/': return divide(a,b);
    };
    


    /* switch(operation){
        case '+':
            display.textContent = add(a,b);
            break;
        case '-':
            display.textContent = subtract(a,b);
            break;
        case '*':
            display.textContent = multiply(a,b);
            break;
        case '/':
            display.textContent = divide(a,b);
            break;
    }; */
}
