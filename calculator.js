const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const display = document.querySelector('#display');
const nums = [...document.getElementsByClassName('number')];
nums.forEach(num => num.addEventListener('click', numbers));

function numbers(e){
    console.log(e);
    display.textContent += e.target.textContent;
}


function operate(a, b, operation){
    switch(operation){
        case '+': return add(a,b);
        case '-': return subtract(a,b);
        case '*': return multiply(a,b);
        case '/': return divide(a,b);
    };
}