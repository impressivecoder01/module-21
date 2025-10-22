//use add and multiplication to calculate wood requirements
// const woodPerChair = 3;  
// const woodPerTable = 10;  
// const woodPerBed = 15;   


// const numChairs = 4;
// const numTables = 2;
// const numBeds = 1;

// const totalWood =
//   (woodPerChair * numChairs) +
//   (woodPerTable * numTables) +
//   (woodPerBed * numBeds);

// console.log("Total wood required: " + totalWood + " cubic feet");

//code form online.

// chair --> 3cft 
// table --> 10cft 
// baed  --> 50cft

function woodQuantity(chair, table, bed){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const allChairWood = chair * perChairWood;
    const allTableWood = table * perTableWood;
    const allBedWood = bed * perBedWood;
    const totalWood = allBedWood+allChairWood+allTableWood;
    return totalWood;
}
const t = 3;
const c = 3;
const b = 3;
const now = woodQuantity(t,c,b);
console.log(now);

// shirt price --> 500;
// pant price --> 300;
// shoe price --> 900;
function fashion(shirt,pant,shoe){
    const perShirtPrice = 500;
    const perPantPrice = 400;
    const perShoePrice = 900;
    const nowShirtPrice = perShirtPrice * shirt;
    const nowPantPrice = perPantPrice * pant;
    const nowShoePrice = perShoePrice * shoe;
    const total = nowPantPrice + nowShirtPrice + nowShoePrice;
    return total;
}
const nowFashion = fashion(2,2,2);
console.log(nowFashion)