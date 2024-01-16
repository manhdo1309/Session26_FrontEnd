let array = [1, 5, -1, 3, -4];
let negative = [];
let positive = [];
for(let i = 0; i < array.length; i++){
    if(array[i] < 0){
        negative.push(array[i]);
    }
    else if(array[i] > 0){
        positive.push(array[i]);
    }
}
array = negative.concat(positive);
console.log(array);