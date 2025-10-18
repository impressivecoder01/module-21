//who is the tallest? find the max number in an array
const numbers = [3,2,4,643,21,64,87,0];
function getMax (numberArray){
    let max = numberArray[0];
    for(const number of numberArray){
        if(number>max){
            max = number;
        }
    }
    return max;
}
const find = getMax(numbers);
console.log(find)