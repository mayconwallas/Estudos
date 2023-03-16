// Expressão de Função


//declaração de função
function minhaFuncao(params) {
    //bloco de código
}

minhaFuncao('param');

// entenddendo a expressão de Função

//const soma = function(num1, num2) {return num1 + num2} 

console.log(soma(250, 30));



/*principal diferenta entre as duas: o chamado Hoisting (içar)
basicamente as funções e as var são lidas e "listadas" no topo dele*/
    //chamada feita acima da função // funcionando normal
console.log(apresentar());

function apresentar() {
    return "Olá";
}

// agora vamos fazer o mesmo com a expressão de funcão

//console.log(soma(50, 25));
const soma = function(num1, num2) {return num1 + num2} 
