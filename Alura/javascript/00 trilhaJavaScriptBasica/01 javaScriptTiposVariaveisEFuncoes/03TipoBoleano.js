// Tipo Boolean

const primeiroNumero = 5;
const segundoNumero = 10;

console.log(primeiroNumero === segundoNumero);
console.log(primeiroNumero == segundoNumero);
console.log(primeiroNumero !== segundoNumero);
console.log(primeiroNumero > segundoNumero);
console.log(primeiroNumero < segundoNumero);
console.log(primeiroNumero >= segundoNumero);
console.log(primeiroNumero <= segundoNumero);

console.log("-----------------------------------------");
const terceiroNumero = 20;
const quartoNumero = 20;

console.log(terceiroNumero === quartoNumero);
console.log(terceiroNumero == quartoNumero);
console.log(terceiroNumero !== quartoNumero);
console.log(terceiroNumero > quartoNumero);
console.log(terceiroNumero < quartoNumero);
console.log(terceiroNumero >= quartoNumero);
console.log(terceiroNumero <= quartoNumero);
console.log("-----------------------------------------");

//também podemos declarar a variavel com o valor boleano false ou true 

let verdade = true;
let mentira = false;

// comparando string 

const cidade = "belo horizonte";
const input = "Belo Horizonte";
console.log(cidade === input); // false

//const cidade = "belo horizonte";
//const input = "Belo Horizonte";
const inputMinusculo = input.toLowerCase();// aqui joga os dois para minusculo
console.log(cidade === inputMinusculo); // true


/* o java script é case-sensitive ou seja ele diferencia letras maiúsculas de minúsculas
o JavaScript trata os quatro exemplos abaixo como variáveis diferentes e não apresentará nenhum erro se você executar o programa:*/

const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR);