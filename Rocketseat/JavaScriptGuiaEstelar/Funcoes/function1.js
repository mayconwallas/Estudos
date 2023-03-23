// function expression
// function anonymous
const sum = function (x, y) {// parametros (x, y)
    let total = x + y;
    return total;
}


let num1 = 32;
let num2 = 25; 
sum(10, 35);// passando argumentos (10, 35)
console.log(`O Primeiro numero é: ${num1}`);
console.log(`O segundo numero é: ${num2}`);
console.log(`A soma dos numeros é: ${sum(num1, num2)}`);