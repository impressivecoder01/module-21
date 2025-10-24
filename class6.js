//(advanced) multi-layer discount price calculation.
// upto 100: --> 100
// more than 101 --> 200: 90
// more than 200: --> 70

function discountPrice(quantity){
    if(quantity<= 100){
        let cost = quantity * 100
        return cost
    }
    else if(quantity>101 && quantity<=200){
        let cost = quantity * 90;
        return cost
    }
    else if(quantity > 200){
        let cost = quantity * 200
        return cost;
    }
}
const num = 40;
const num1 = 110;
const num2 = 200;
const num3 = 400;
console.log(discountPrice(num))
console.log(discountPrice(num1))
console.log(discountPrice(num2))
console.log(discountPrice(num3))

// ph code
function discount(quantity){
    if(quantity <=100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90;
        return total;
    }
    else{
        const total = quantity * 70;
        return total;
    }
}
console.log(discount(num),'p')
console.log(discount(num1))
console.log(discount(num2))
console.log(discount(num3))
//chatgpt code
// function multiLayerDiscount(price, d1, d2, d3) {
//   let finalPrice = price;

//   if (d1 > 0) {
//     finalPrice = finalPrice - (finalPrice * d1 / 100);
//   } else {
//     finalPrice = finalPrice;
//   }

//   if (d2 > 0) {
//     finalPrice = finalPrice - (finalPrice * d2 / 100);
//   } else {
//     finalPrice = finalPrice;
//   }

//   if (d3 > 0) {
//     finalPrice = finalPrice - (finalPrice * d3 / 100);
//   } else {
//     finalPrice = finalPrice;
//   }

//   return parseFloat(finalPrice.toFixed(2));
// }


// const originalPrice = 1000;
// const finalPrice = multiLayerDiscount(originalPrice, 10, 5, 3);
// console.log("Final Price: $" + finalPrice);
/**
 * first100 --> 100
 * 101to200 --> 90
 * above 200 --> 70
 */
function layeredDiscountedTotal(quantity){
    if(quantity<=100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity<=200){
        const find = quantity - 100;
        const real = 100 - quantity;
        const now = Math.abs(real)
        const now2 = now * 100;
        const total = find * 90;
        const total2 = now2+ total
        return total2;
    }
    else{
        const find = quantity - 200;
        const real = 200 - quantity;
        const now = Math.abs(real);
        const now2 = now * 100
        const total = find * 70;
        const total2 = now2 + total
        return total2;
    }
}
const n = 100;
const m = 200;
const l = 300;
console.log(layeredDiscountedTotal(n), 'me')
console.log(layeredDiscountedTotal(m))
console.log(layeredDiscountedTotal(l))

function layer(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;
    if(quantity <=100){
        const total = quantity * first100Price;
        return total;
    }
    else if(quantity<= 200){
        const first100 = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        const total = first100 + remainingTotal;
        return total;
    }
    else{
        const first100Total = 100 * first100Price;
        const second100Total = 100* second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        const total = first100Total + second100Total + remainingTotal
        return total
    }
}

console.log(layer(n), 'p')
console.log(layer(m))

console.log(layer(l))