function myCallback(value) {
        return `${value} é muito bom!`
}
function myCallback2(value){
    console.log(value + " e bom")  
}
function myCallback3(value){
    console.log(value + " e melhor que bom")  
}
let myArr = ["maçã", "uva", "pera"];
let myLetters = ['a','b','c','d','d','e','f','f','g','h']
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
let retornoForEach = myArr.forEach(myCallback3)
let retornoNewForEach = newForEach(myArr, myCallback3);

function newForEach(){
    for (let i = 0; i < myArr.length; i++ ){
        newArr[i] = myArr[i] + ' é muito bom!'
    }
    return newArr
}
///////////////////

let retornoSome = myArr.some(a)
let retornoNewSome = newSome(a, myArr, myCallback);

function newSome(a){
    for (let i = 0; i < myLetters.length; i++ ){
        a = myLetters[i]
    }
    return true
}
///////////////////
