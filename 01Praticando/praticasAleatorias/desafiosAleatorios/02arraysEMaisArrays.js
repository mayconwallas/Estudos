// 06 Escreva uma função que recebe um array de números e retorna o menor número do array.
// 07 Escreva uma função que recebe um array de números e retorna o maior número do array.
// 08 Escreva uma função que recebe um array de números e retorna um novo array contendo apenas os números pares.
// 09 Escreva uma função que recebe um array de números e retorna um novo array contendo apenas os números ímpares.
// 10 Escreva uma função que recebe um array de números e retorna a média dos números.



let numbers = [10, 2, 3, 4, 5, 6, 7, 8, 9, 1];

// resposta desafio 06
function menorValorDoArray(arr) {
    let eMenor = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < eMenor) {
            eMenor = arr[i];
        }
        }
        return eMenor;
    }
console.log(menorValorDoArray(numbers));


// resposta desafio 07
function maiorValorDoArray(arr) {
    let eMaior = arr[0];
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] > eMaior) {
            eMaior = arr[j];
        }
        }
        return eMaior;
    }
console.log(maiorValorDoArray(numbers));


// resposta desafio 08
function numerosPares(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let verifica = arr[i];
        if (verifica % 2 == 0 ) {
            newArr.push(arr[i]);
            //console.log(newArr);
        }
    } 
    return newArr;
}

const newArr = numerosPares(numbers);
console.log(newArr);


// resposta desafio 09

function numerosImpar(arr) {
    const newArrImpar = [];
    for (let j = 0; j < arr.length; j++) {
        let verificaImpar = arr[j];
        if (verificaImpar % 2 == 1 ) {
            newArrImpar.push(arr[j]);
            //console.log(newArrImpar);
        }
    } 
    return newArrImpar;
}

const newArrImpar = numerosImpar(numbers);
console.log(newArrImpar);


// resposta desafio 10

function media(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
        // debugando console.log(soma);
        
    }
    // debugando console.log(arr.length);
    return soma / arr.length;
}

const resultado = media(numbers);
console.log(resultado);