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