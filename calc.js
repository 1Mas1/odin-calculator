
let operator = '';
let previousValue = '';
let currentValue = '';


document.addEventListener("DOMContentLoaded", function (){

    let screenUpper = document.querySelector('.screen-upper');
    let screenLower = document.querySelector('.screen-lower');
    let clear = document.querySelector('.clear');
    let btnDelete = document.querySelector('.delete');
    let numbers = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operator');
    let equal = document.querySelector('.equal');

    numbers.forEach((number) => number.addEventListener('click', function(e) {
        handleNumber(e.target.textContent)
        screenLower.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener('click', function(e) {
        handleOperator(e.target.textContent)
        screenUpper.textContent = previousValue + ' ' + operator;
        screenLower.textContent = currentValue;
    }))

    clear.addEventListener('click', function() {
        previousValue = '';
        currentValue = '';
        operator = '';
        screenLower.textContent = currentValue;
        screenUpper.textContent = currentValue;
    })

    equal.addEventListener('click', function() {
        calculate()
        screenUpper.textContent = '';
        screenLower.textContent = previousValue;
    })

})

function handleNumber(num) {
    if (currentValue.length <= 5) {
        currentValue += num;
    }   
}

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}


function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator == '+') {
        previousValue += currentValue; 
    } else if (operator == '-') {
        previousValue -= currentValue;
    } else if (operator == 'x') {
        previousValue *= currentValue;
    } else if (operator == '/') {
        previousValue /= currentValue;
    }

    previousValue = round(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function round(num) {
    return Math.round(num * 1000) / 1000
}

