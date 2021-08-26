
function myCallback(value) {
        return `${value} é muito bom!`
};

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
retornoMap // Deve retornar ["maçã é muito bom!", "uva é muito bom!", "pera é muito bom!"];
retornoNewMap // Deve retornar ["maçã é muito bom!", "uva é muito bom!", "pera é muito bom!"];
myArr // Deve retornar ["maçã", "uva", "pera"];
