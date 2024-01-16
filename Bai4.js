let a = parseInt(prompt("Nhập vào giá trị a"));
let b = parseInt(prompt("Nhập vào giá trị b"));
let multiples = new Array();
if(a > b){
    for(let i = 1; i < a; i++){
        if(i % b === 0){
            multiples.push(i);
        }
    }
    console.log(multiples);
}
else if(a < b){
    for(let i = 1; i < b; i++){
        if(i % a === 0){
            multiples.push(i);
        }
    }
    console.log(multiples);
}
