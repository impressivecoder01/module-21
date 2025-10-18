//can you find out who will get the strawberry?
const disha = 55;
const misha = 60;
if(disha>misha){
    console.log('disha will get this')
}
else{
    console.log('misha will get this')
}

function getReward(a, b){
    if(a>b){
    return('disha will get this')
}
else{
    return('misha will get this')
}
}
const i = 5;
const j = 9;
console.log(getReward(i, j),'reward')
const kim = 1;
const jim = 5;
const sim = 3;
if(kim>jim && kim>sim){
    console.log('kim boro')
}
else if(jim>kim && jim> sim){
    console.log('jim boro')
}
else {
    console.log('sim boro')
}
function findBoro(a, b, c){
    if(a>b && a>c){
    return('kim boro')
}
else if(b>a && b> c){
    return('jim boro')
}
else {
    return('sim boro')
}
}
console.log(kim,jim,sim)
console.log(findBoro(kim,jim,sim))
const max = Math.max(3,2,145,675,43,3);
console.log(max)
const min = Math.min(342,4,12,546,7,4,-2)
console.log(min)