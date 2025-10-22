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