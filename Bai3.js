let array = [2, 5, 4, 7, 5, 6, 2, 5, 1, 2, 2];
let searchValue = parseInt(prompt("Nhập vào giá trị muốn tìm kiếm"));
let count = 0;
for(let i = 0; i < array.length; i++){
    if(array[i] === searchValue){
        count++;
    }
}
if(count > 0){
    console.log(`Giá trị ${searchValue} xuất hiện ${count} lần trong mảng`);
}
else{
    console.log(`Giá trị ${searchValue} không xuất hiện trong mảng`);
}