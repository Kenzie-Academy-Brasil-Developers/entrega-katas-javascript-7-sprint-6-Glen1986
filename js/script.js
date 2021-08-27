function myCallback(value) {
        return `${value} é muito bom!`
}
function myCallback2(value){
    console.log(value + " e bom")  
}
function myCallback3( a){
}
function myCallback4(a){
    return a
}

let string = "Hola "
let myArr = ["maçã", "uva", "pera"];
let myLetters = ['a','b','c','d','d','e','f','f','g','h']
let myNumbers = [2,3,5,5,7,6,8,2,4,7]
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

let retornoSome = myArr.some(myCallback3)
let retornoNewSome = newSome(myArr, myCallback3);

function newSome(a){
    for (let i = 0; i < myLetters.length; i++ ){
        a = myLetters[i]
    }
    return true
}
///////////////////
let retornoReduce = myNumbers.reduce((a,b) => a + b)
let retornoNewReduce = newReduce(myNumbers);

function newReduce(){
    let total = 0;
    for (let i = 0; i < myNumbers.length; i++ ){
        total += myNumbers[i]
    }
    return total
}
///////////////////

let retornoFilter = myNumbers.filter((item) => item % 2 === 0)
let retornoNewFilter = newFilter(myNumbers);

function newFilter(){
    let total = [];
    for (let i = 0; i < myNumbers.length; i++ ){
        if(myNumbers[i] % 2 ===0){
           total.push(myNumbers[i])
        }
    }
    return total
}

///////////////////

let retornoConcat = string.concat(myCallback4)
let retornoNewConcat = newFilter(myNumbers);

function newFilter(){
    let total = [];
    for (let i = 0; i < myNumbers.length; i++ ){
        if(myNumbers[i] % 2 ===0){
           total.push(myNumbers[i])
        }
    }
    return total
}
