

let string = "Hola "
let myArr = ["maçã", "uva", "pera"];
let myLetters = ['a','b','c','d','d','e','f','f','g','h']
let myNumbers = [2,3,5,5,7,6,8,2,4,7]
let newArr = [];

function myCallback(value) {
    return `${value} é muito bom!`
}
function retornoMap(a,myCallback){
   return a.map(myCallback);
};
function newMap(a) {
    for (let i = 0; i < a.length; i++){
        newArr[i] = a[i] +' é muito bom!'
    }
    return newArr;
}
let retornoNewMap = newMap
////////////////////////////////////////////////////////
function retornoFill(a, b){
    return a.fill(b)
}
function retornoNewFill(a, b){
    for( let i = 0; i < a.length; i++ ){
        a[i] = b
    }
    return a
}
