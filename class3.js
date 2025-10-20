//use add and multiplication to calculate wood requirements
const woodPerChair = 3;   // 3 cubic feet per chair
const woodPerTable = 10;  // 10 cubic feet per table
const woodPerBed = 15;    // 15 cubic feet per bed

// Number of items ordered
const numChairs = 4;
const numTables = 2;
const numBeds = 1;

// Total wood = (wood per item × quantity) + ...
const totalWood =
  (woodPerChair * numChairs) +
  (woodPerTable * numTables) +
  (woodPerBed * numBeds);

console.log("Total wood required: " + totalWood + " cubic feet");