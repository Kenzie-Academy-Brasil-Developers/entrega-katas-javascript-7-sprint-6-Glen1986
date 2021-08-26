function myCallback(value) {
        return `${value} é muito bom!`
}

let myArr = ["maçã", "uva", "pera"];
let newArr = [];

let retornoMap = myArr.map(myCallback);
let retornoNewMap = newMap(myArr, myCallback);

function newMap() {
    for (let i = 0; i < myArr.length; i++){
        newArr[i] = myArr[i] +' é muito bom!'
    }
    return newArr;
}
////////////////
let retornoFill = myArr.map(myCallback);
let retornoNewFill = newMap(myArr, myCallback);


function newFill() {
    for (let i = 0; i < myArr.length; i++){
        newArr[i] = myArr[i] +' é muito bom!'
    }
    return newArr;
}
////////////////
