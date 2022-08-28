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
document.addEventListener('keydown', e => {
 if(!isNaN(e.key)) numbers(e);
});

const operators = [...document.getElementsByClassName('operator')];
operators.forEach(operator => operator.addEventListener('click', storeValues));
document.addEventListener('keydown', e => {
    if(['+','-','*','/','Enter'].includes(e.key)) storeValues(e);
});

const allClear = document.querySelector('.clear');
allClear.addEventListener('click', clear);
document.addEventListener('keydown', e => {
    if(e.key === 'Delete') clear(e);
})

const float = document.querySelector('.float');
float.addEventListener('click', decimalPoint);
document.addEventListener('keydown', e => {
    if(e.key === '.') decimalPoint(e);
})

const backSpace = document.querySelector('.backspace');
backSpace.addEventListener('click', clearOne);
document.addEventListener('keydown', e => {
    if(e.key === 'Backspace') clearOne(e);
})

/* const keyboardSupport = document.addEventListener('keydown', e => {
    switch(e.key){
        case !isNaN(e.key):
            numbers(e);
            break;
        case ['+','-','*','/','Enter'].includes(e.key):
            storeValues(e);
            break;
        case (e.key === 'Delete'):
            clear(e);
            break;
        case (e.key === '.'):
            decimalPoint(e)
            break;
        case (e.key === 'Backspace'):
            clearOne(e);
            break;
        default: return;
    }
}) */

function numbers(e){
    removePressed();
    if (!operator) {
        if(firstOperand.textContent.length < maxSize){
            eventType(e, firstOperand);
            display.appendChild(firstOperand);
        }
    } else if(operator === '=' && storedValue){
        clear(e);
        eventType(e, firstOperand);
        display.appendChild(firstOperand);
    } else{
        if(secondOperand.textContent.length < maxSize){
            eventType(e, secondOperand);
            if(display.contains(firstOperand)) display.replaceChild(secondOperand, firstOperand);
        }
    }   
}

function storeValues(e){
    removePressed();
    if(e.target.classList.contains('operator')) e.target.classList.add('pressed');
    if(e.type === 'keydown') operators.forEach((operator) => {
        if(e.key === operator.textContent) operator.classList.add('pressed');
        if(e.key === 'Enter') document.querySelector('.equal').classList.add('pressed');
    })

    if(!firstOperand.textContent && !secondOperand.textContent) return;
    if(!storedValue){
        storedValue = firstOperand.textContent;
    } else if(secondOperand.textContent){
        operate(storedValue, secondOperand.textContent, operator);
    }

    if(e.type === 'click') operator = e.target.textContent;
    if(e.type === 'keydown'){
        if(e.key === 'Enter'){ 
            operator = '='
        }else operator = e.key;
    }
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
    removePressed();
}

function clearOne(e){
    if(!display.firstChild) return;
    display.firstChild.textContent = display.firstChild.textContent.slice(0, -1);
    if(display.firstChild.textContent === '') clear(e);
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

function removePressed(){
    operators.forEach((operator) => {
        if(operator.classList.contains('pressed')) operator.classList.remove('pressed')
    });
}

function eventType(e, element){
    if(e.type === 'keydown') element.textContent += e.key;
    if(e.type === 'click') element.textContent += e.target.textContent;
}