// var 

var forma = "retângulo"
var altura = 5;
var comprimento = 7;
// var aceita ser declarada depois de ser utiliza
area = altura * comprimento;

var area; // cuidado para não se perter no codigo
if (forma === 'retângulo') {
    area = altura * comprimento;
} else{
    area = (altura * comprimento) / 2;
}
console.log(area);



//let 
let formaLet = 'retângulo';
let alturaLet = 5;
let comprimentoLet = 7;
let areaLet;
if (formaLet === 'retângulo') {
    areaLet = alturaLet * comprimentoLet;
} else{
    areaLet = (alturaLet * comprimentoLet) / 2;
}

console.log(areaLet);
//let areaLet; let não aceita ser declarado depois


//const 
const formaConst = 'retângulo';
const alturaConst = 5;
const comprimentoConst = 7;
let areaConst;
if (formaConst === 'retângulo') {
    areaConst = alturaLet * comprimentoLet;
} else{
    areaConst = (alturaLet * comprimentoLet) / 2;
}

console.log(areaConst);