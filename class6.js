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

}
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
