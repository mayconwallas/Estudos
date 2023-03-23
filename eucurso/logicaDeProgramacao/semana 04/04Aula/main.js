let res = document.querySelector(".container__conteudo"); 
// function alertaInteiro(mensagem) {
//     let casoString = parseInt(mensagem)
//     if (casoString == NaN) {
//         res.innerHTML += `<p> ${mensagem}</p>`;
//     } else {
//         res.innerHTML += `<p> ${mensagem}</p>`;
//     }
// }

// alertaInteiro(10);
// alertaInteiro("Olá, Mundo!");


// // ou podemos tratar o erro e informa o usuario

// function alertaInteiro2(numero) {
//    res.innerHTML += (isNaN(parseInt(numero))?`<p>Entrada invalida!</p>`: `<p>${numero}</p>`);
// }

// alertaInteiro2(10);
// alertaInteiro2("Olá, Mundo!");


// // desafio da aula 02:

// function desafio(num) {
//     let verificaString = parseInt(num)
//     if (!isNaN(verificaString)) {
//         res.innerHTML += `<p> ${num}</p>`;
//     }
// }

// desafio(10);
// desafio("testando strings")

function multiplicaPares(num1, num2) {
    verificanum = (num1 % 2 == 0) && (num2 % 2 == 0);
    if (verificanum) {
        return num1 * num2;
    } else {
        return 0
    }
}

res.innerHTML = multiplicaPares(10, 10);

//outra forma de resolvewr 

function multiplica(x, y) {
    if((x%2) == 1 && (y%2) == 1) return 0;
    return x * y;
}

res.innerHTML += `<p>${multiplica(10, 10)}</p>`;