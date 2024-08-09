function calculator(first, second, operator) {
    switch (operator) {
        case "+":
            return first + second;
        case "-":
            return first-second;
        case "*":
            return first * second;
        case "/":
            if(second === 0) {
                throw new Error("Cannot divide by 0");
            }
            return first/second;
    
        default:
            throw new Error("Invalid Operator")
    }
}

module.exports = calculator;
