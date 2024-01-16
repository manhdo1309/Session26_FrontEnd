let array = [5, 3, 2, 4, 1, 7, 6];
let searchValue = parseInt(prompt("Nhập vào giá trị cần tìm kiếm"));
let found = false;
for(let i = 0; i < array.length; i++){
    if(array[i] === searchValue){
        console.log(`Giá trị được tìm thấy tại vị trí ${i}`);
        found = true;
        break;
    }
}
if(!found){
    console.log("Phần tử không tồn tại");
}