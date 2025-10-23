//calculate the total cost of the products in a shopping cart
const products = [
    {name: 'shampoo', price : 300},
    {name: 'shampoo2', price : 400},
    {name: 'shampoo3', price : 500}
]
function totalPrice(array){
    let sum = 0;
    for(let ary of array){
        sum = ary.price + sum;
    }
    return sum;
}
console.log(totalPrice(products))

const products2 = [
    {name: 'shampoo', price : 300, quantity: 2},
    {name: 'shampoo2', price : 400, quantity: 3},
    {name: 'shampoo3', price : 500, quantity: 4}
]

function allCost(objects){
    let sum = 0;
    for(let object of objects){
        sum = (object.price * object.quantity)+sum;
    }
    return sum
}
console.log(allCost(products2))