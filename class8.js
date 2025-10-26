//handle unexpected function input parameter error
function multiply (num1, num2){
    if(typeof num1 && typeof num2 === 'number'){

        const mult = num1 * num2;
        return mult;
    }
    else{
        return 'give a number please'
    }
}
const result = multiply(4,4);
console.log(result)
// let a = 5;
// console.log(typeof a)
function fullname(a, b){
    if(typeof a && typeof b === 'string'){
        let full = a + ' ' + b;
        return full

    }
    else{
        return 'give valid info'
    }
}
console.log(fullname('a'))

function getPrice(product){
    if(typeof product === 'object'){

        const price = product.price;
        return price;
    }
    else{
        return 'you should give a proper object'
    }
}
console.log(getPrice({name: 'molom', price: 500}))
// console.log(getPrice(['price500']))
// console.log(getPrice(5))