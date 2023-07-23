/* 
    faça um programa para calcular o valor de uma viagem.
    preço medio do combustivel.
    gasto medio que o carro tem.
    e a distancia da viagem.

*/


// let precoCombustivel = 5.63;
// let mediaGstoCarro = 12;
// let distanciaViagem = 250;

// let quantosLitrovaiGastar = distanciaViagem / mediaGstoCarro;
// let valorGstoViagem = quantosLitrovaiGastar * precoCombustivel;

// console.log(valorGstoViagem.toFixed(2));
var testeVar;
let testeLet;
function testandoEscopo() {
    testeVar= 10
    let testeLet = 20;
    // const testeConst = 30;
    
    
    
    function testando () {
        console.log(testeVar);
        console.log(testeLet);
        // console.log(testeConst);
    }
    testando();
}
testandoEscopo()