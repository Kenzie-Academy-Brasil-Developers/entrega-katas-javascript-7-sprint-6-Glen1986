console.log("script")
function myCallback(value) {
        return `${value} é muito bom!`
    
};
function myCallback2(value){
    for(let i = 0; i < value.length; i++){
        value[i]= value[i]+" é muito bom!"
    }
        return `${value}`
}

let myArr = ["maçã", "uva", "pera"];
let newArr = [];
let retornoForEach = myArr.forEach(myCallback2);
let retornoNewForEach = newForEach(myArr, myCallback2);

function newForEach() {
    for (let i = 0; i < myArr.length; i++){
        newArr[i] = myArr[i] +' é muito bom!'
    }
    return newArr;
}
retornoForEach // Deve retornar ["maçã é muito bom!", "uva é muito bom!", "pera é muito bom!"];
retornoNewForEach // Deve retornar ["maçã é muito bom!", "uva é muito bom!", "pera é muito bom!"];
myArr // Deve retornar ["maçã", "uva", "pera"];
