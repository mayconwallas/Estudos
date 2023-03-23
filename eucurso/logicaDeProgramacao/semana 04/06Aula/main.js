let res = document.querySelector(".container__conteudo"); 
const numeros = []
let numero = prompt("informe um numero:");
function test(numero) {
    for (let i = 0; i < numero; i++) {
        numeros.push(i+1);
    }
}
test(numero);
console.log(numeros);
function inverter(numeros) {
    var teste = numeros.length;
    for (let i = teste; i > 0 ; i--) {
        res.innerHTML += `<p>${i}</p>`;
    }
}
inverter(numeros);

// function multiplicaPares(num1, num2) {
//     verificanum = (num1 % 2 == 0) && (num2 % 2 == 0);
//     if (verificanum) {
//         return num1 * num2;
//     } else {
//         return 0
//     }
// }

// res.innerHTML = multiplicaPares(10, 10);

// //outra forma de resolvewr 

// function multiplica(x, y) {
//     if((x%2) == 1 && (y%2) == 1) return 0;
//     return x * y;
// }

// res.innerHTML += `<p>${multiplica(10, 10)}</p>`;