// tipos Number

const  meuNumero = 3;
const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoSoma = primeiroNumero + segundoNumero;
const operacaoSubtracao = primeiroNumero - segundoNumero;
const operacaoMultiplicacao = primeiroNumero * segundoNumero;
const operacaoDivisao = primeiroNumero / segundoNumero;
const operacaoResto = primeiroNumero % segundoNumero;

console.log(operacaoSoma);
console.log(operacaoSubtracao);
console.log(operacaoMultiplicacao);
console.log(operacaoDivisao);
console.log(operacaoResto);

// ponto flutuante

const numeroComPonto = 3.3;
const numeroComPontoSemZero = .5; // é igual 0.5

const novaOperacao = primeiroNumero / numeroComPonto;

console.log(novaOperacao);

const OutraOperacao = segundoNumero / numeroComPontoSemZero;

console.log(OutraOperacao);

// NaN -> Not a Number (não é número)

const alura = "Alura";
console.log(alura * primeiroNumero);

// teste de comparação de numero apresentado no material

var lista = [10,1, 5, 9, 8, 12, 15];
lista.sort((a, b) => a - b); // [1, 5, 8, 9, 10, 12, 15]
console.log(lista);