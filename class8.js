//handle unexpected function input parameter error
function multiply (num1, num2){
    if(typeof num1 && typeof num2 === 'number'){

        const mult = num1 * num2;
        return mult;
    }
}
const result = multiply(4,4);
console.log(result)
// let a = 5;
// console.log(typeof a)