class Calculator {
    constructor() {
        this.operator = null;
        this.previousNumber = null;
    }

    add(a, b) {
        return parseInt(a) + parseInt(b);
    }

    subtract(a, b) {
        return parseInt(a) - parseInt(b);
    }

    multiply(a, b) {
        return parseInt(a) * parseInt(b);
    }

    divide(a, b) {
        return parseInt(a) / parseInt(b);
    }

    reset() {
        this.operator = null;
        this.previousNumber = null;
    }
}

export { Calculator };
