//find the cheapest phone from an array of phone objects
const phnPrice = [2000, 2300, 4000,23299, 45000, 150000,350000,270000];
function getCheap(array){
    let low = array[0];
    for(let ary of array){
        if(ary < low){
            low = ary
        }
    }
    return low;
}
console.log(getCheap(phnPrice))

const mobiles = [
  {name: "iPhone 15 Pro", price: 1199,color: "Titanium Gray",camera: "48MP main, 12MP ultra-wide, 12MP telephoto" },
  {name: "Samsung Galaxy S24 Ultra",price: 1099, color: "Phantom Black", camera: "200MP main, 12MP ultra-wide, 10MP periscope telephoto" },
  {  name: "Google Pixel 8 Pro",price: 999, color: "Bay Blue", camera: "50MP main, 48MP ultra-wide, 48MP telephoto" },
  { name: "OnePlus 12",price: 799, color: "Emerald Green", camera: "50MP main, 48MP ultra-wide, 64MP telephoto"},
  {name: "Xiaomi 14 Pro", price: 899, color: "Ceramic White", camera: "50MP main, 50MP ultra-wide, 50MP telephoto" }
];
// console.log(mobiles[0].price)
function cheapestPhone(object){
    let low = object[0]
    for(const mobile of object){
        if(mobile.price<low.price){
            low = mobile
        }
        
    }
    return low;
}
console.log(cheapestPhone(mobiles), 's')