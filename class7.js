//simple calculator to sell function inside a function
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1 , num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}
function calculator(a,b, operation){
    if(operation === 'add'){
        return add(a, b)
    }
    else if (operation === 'subtract'){
        return subtract(a,b)
    }
    else if (operation === 'multiply'){
        return multiply(a,b)
    }
    else {
        return 'no operational option found'
    }
}
console.log(calculator(3,3,'add'))