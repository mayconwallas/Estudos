// Conversão de tipos
// booleanos

const numero = 456;
const numeroString = "456";

console.log(numero == numeroString); // retorna true
console.log(numero === numeroString); // retorna falase

// probelma de concatenação 
console.log(numero + numeroString);
// para resolver podemos usar
//Number()
//ou caso queira voltar para string
//Sting()
console.log(numero + Number(numeroString));
let testanto = String(numero + Number(numeroString))
console.log(typeof testanto);



//exemplor:
var respostaDeTudo = 42
let idade = 29
const pi = 3.14
{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)