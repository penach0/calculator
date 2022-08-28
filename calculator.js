const add = (a, b) => +a + +b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if(+b === 0) {
        return "Self-destruct"
    } else return a / b;
};

let operator;
let storedValue;
const maxSize = 12;

const display = document.querySelector('#display');
const firstOperand = document.createElement('p');
const secondOperand = document.createElement('p');

const nums = [...document.getElementsByClassName('number')];
nums.forEach(num => num.addEventListener('click', numbers));

const operators = [...document.getElementsByClassName('operator')];
operators.forEach(operator => operator.addEventListener('click', storeValues));

const allClear = document.querySelector('.clear');
allClear.addEventListener('click', clear);

const float = document.querySelector('.float');
float.addEventListener('click', decimalPoint);


function numbers(e){
    if (!operator) {
        if(firstOperand.textContent.length < maxSize){
            firstOperand.textContent += e.target.textContent;
            display.appendChild(firstOperand);
        }
    } else if(operator === '=' && storedValue){
        clear(e);
        firstOperand.textContent += e.target.textContent;
        display.appendChild(firstOperand);
    } else{
        if(secondOperand.textContent.length < maxSize){
            secondOperand.textContent += e.target.textContent;
            if(display.contains(firstOperand)) display.replaceChild(secondOperand, firstOperand);
        }
    }   
}

function storeValues(e){
    if(!firstOperand.textContent && !secondOperand.textContent) return;
    if(!storedValue){
        storedValue = firstOperand.textContent;
    } else if(secondOperand.textContent){
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

    if(firstOperand.textContent.length > maxSize + 1){
        if(firstOperand.textContent.includes('.')){
            firstOperand.textContent = parseFloat(decimalSize(firstOperand.textContent));
        } else firstOperand.textContent = "Overflow";
    }

    display.replaceChild(firstOperand, secondOperand);
    storedValue = firstOperand.textContent;
    secondOperand.textContent = '';
}

function clear(e){
    operator = '';
    storedValue = '';
    firstOperand.textContent = '';
    secondOperand.textContent = '';
}

function decimalSize(string){
    let excess = string.length - maxSize;
    let separated = string.split('.');
    return((+string).toFixed(separated[1].length - excess));
    
}

function decimalPoint(e){
    if(display.firstChild.textContent.includes('.')) return;
    display.firstChild.textContent += '.';
}