let array = [];
let n = parseInt(prompt("Nhập số lượng phần tử trong mảng"));
for (let i = 0; i < n; i++) {
    let element = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
    array.push(element);
}
let integersFound = false;
    for (let element of array) {
        if (Number.isInteger(element)) {
            console.log(element);
            integersFound = true;
        }
    }
    if (!integersFound) {
        console.log("Trong mảng không tồn tại số nguyên");
    }