let array = [1,5,6,3,2,1,1,5,6,7];
let child_array = [];
let n = parseInt(prompt("Nhập vào một số bất kỳ"));
let sum = 0;
let startIndex = 0;
let endIndex = -1;
for(let i = 0; i < array.length; i++){
    sum += array[i];
    while(sum > n && startIndex <= i){
        sum -= array[startIndex];
        startIndex ++;
    }
    if(sum === n){
        endIndex = i;
        break;
    }
}   
if (endIndex !== -1) {
    let resultArray = array.slice(startIndex, endIndex + 1);
    console.log(resultArray);
} else {
    console.log("Không có mảng con thỏa mãn");
}