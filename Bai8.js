let array = [1,5,6,3,2,1,1,5,6,7];
let count = [];
for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (count[element] === undefined) {
        count[element] = 1;
    } else {
        count[element]++;
    }
}
for (let i = 0; i < count.length; i++) {
    if (count[i] >= 2) {
        console.log(i);
    }
}