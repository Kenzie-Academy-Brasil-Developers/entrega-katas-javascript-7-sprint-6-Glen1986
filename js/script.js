

let string = "Hola "
let myArr = ["maçã", "uva", "pera"];
let myLetters = ['a','b','c','d','d','e','f','f','g','h']
let myNumbers = [2,3,5,5,7,6,8,2,4,7]
let newArr = [];

function myCallback(value) {
    return `${value} é muito bom!`
}
function myCallback2(value){
   return value % 2 === 0;
}

////////////////////////////////////////////////////////
function retornoMap(a,myCallback){
   return a.map(myCallback);
};
function newMap(a) {
    for (let i = 0; i < a.length; i++){
        newArr[i] = a[i] +' é muito bom!'
    }
    return newArr;
};
let retornoNewMap = newMap
////////////////////////////////////////////////////////
function retornoFill(a, b){
    return a.fill(b)
};
function retornoNewFill(a, b){
    for( let i = 0; i < a.length; i++ ){
        a[i] = b
    }
    return a
};
////////////////////////////////////////////////////////
function retornoSome(a,b){

    console.log(a, b)
    return a.some(b)
}
///////////////////////////////////////////////////////

function retornoReduce(c){
    console.log(c)
    return c.reduce((acc, item) => acc + item);
};
function retornoNewReduce(a){
    let total = 0;
    for(let i=0; i < a.length; i++){
        total += a[i]
    }
    return total;
}
////////////////////////////////////////////////////////
function retornoFilter(a, n){
    return a.filter((item) => item % n === 0)
}
function retornoNewFilter(a, n){
    //n = Number(n)
    let newArr = [];
    for(let i = 0; i < a.length; i++){
        if(a[i] % n === 0){
            newArr.push(a[i]);
        }
    }
    return newArr;
}
////////////////////////////////////////////////////////
function retornoConcat(a,b){
    return a.concat(b)
}
function retornoNewConcat(a, b){
       return a +',' + b
}
////////////////////////////////////////////////////////
 let total;
function retornoForEach(a,b){
     total = a.forEach((currentValue) => {
     currentValue + b
});
    console.log(total)
return total
}
///////////////////////////////////////////////////////
function retornoFind(arr, ref){
    console.log(arr)
  return arr.find(elements => elements, ref)
}


/*function retornoForEach(a,b){
    console.log(b)
    let total = []
    total = a.forEach(function callback(currentValue, index, array) {
        currentValue = currentValue + b
    // tu iterador
    })*/


//    arr.forEach(function callback(currentValue, index, array) {
    // tu iterador
//}[, thisArg]);
    //return a.forEach((ab) => ab = ab + b)
//return total
//}
