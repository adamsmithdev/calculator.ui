import { Calculator } from './calculator.js';

window.onload = () => {
    main();
};

const main = () => {
    for (const buttonId in buttons) {
        const button = document.getElementById(buttonId);
        button.addEventListener('click', () => handleAction(buttons[buttonId]));
    }
};

const calculator = new Calculator();

const buttons = {
    zero: { type: 'number', value: '0' },
    one: { type: 'number', value: '1' },
    two: { type: 'number', value: '2' },
    three: { type: 'number', value: '3' },
    four: { type: 'number', value: '4' },
    five: { type: 'number', value: '5' },
    six: { type: 'number', value: '6' },
    seven: { type: 'number', value: '7' },
    eight: { type: 'number', value: '8' },
    nine: { type: 'number', value: '9' },
    add: { type: 'operator', value: '+' },
    subtract: { type: 'operator', value: '-' },
    multiply: { type: 'operator', value: 'x' },
    divide: { type: 'operator', value: '/' },
    equals: { type: 'equals' },
    clear: { type: 'clear' },
};

const handleAction = (action) => {
    const inputElement = document.getElementById('input');
    let inputValue = getInputValue();

    switch (action.type) {
        case 'number':
            if (checkIfOperatorInput()) {
                inputValue = '';
                setInputValue(inputValue);
            }
            inputElement.value = inputValue + action.value;
            break;

        case 'operator':
            calculator.previousNumber = inputValue;
            calculator.operator = action.value;
            setInputValue(action.value);
            break;

        case 'clear':
            calculator.reset();
            setInputValue('');
            break;
        case 'equals':
            calculate();
            break;
    }
};

const calculate = () => {
    const { operator, previousNumber, add, subtract, multiply, divide } =
        calculator;
    const currentNumber = getInputValue();
    let result = currentNumber;

    switch (operator) {
        case '+':
            result = add(previousNumber, currentNumber);
            break;
        case '-':
            result = subtract(previousNumber, currentNumber);
            break;
        case 'x':
            result = multiply(previousNumber, currentNumber);
            break;
        case '/':
            result = divide(previousNumber, currentNumber);
            break;
    }

    setInputValue(result);
    calculator.reset();
};

const setInputValue = (inputValue) => {
    const inputElement = document.getElementById('input');
    inputElement.value = inputValue;
};

const getInputValue = () => {
    const inputElement = document.getElementById('input');
    return inputElement.value;
};

const checkIfOperatorInput = () => {
    let isOperator = false;
    const inputValue = getInputValue();
    const operators = ['+', '-', 'x', '/'];

    if (operators.some((text) => inputValue.includes(text))) {
        isOperator = true;
    }

    return isOperator;
};
