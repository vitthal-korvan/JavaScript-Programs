var num1,num2,operation;
    function calculator(operation, num1, num2) {
        if (operation === "add") {
            return num1 + num2;
        } else if (operation === "subtract") {
            return num1 - num2;
        } else if (operation === "multiply") {
            return num1 * num2;
        } else if (operation === "divide") {
            return num1 / num2;
        } else {
            return "Invalid operation";
        }
    }
    console.log(calculator("add", 2, 3)); // prints 5
    console.log(calculator("subtract", 5, 2)); // prints 3
    console.log(calculator("multiply", 3, 4)); // prints 12
    console.log(calculator("divide", 8, 2)); // prints 4
    console.log(calculator("Invalid operation", 8, 2)); // prints Invalid operation
