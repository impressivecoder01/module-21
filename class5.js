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