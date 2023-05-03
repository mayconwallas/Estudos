// 01 Escreva uma função que recebe um array e retorna o primeiro elemento.
// 02 Escreva uma função que recebe um array e retorna o último elemento.
// 03 Escreva uma função que recebe dois parâmetros, um array e um índice, e retorna o elemento do array correspondente ao índice.
// 04 Escreva uma função que recebe um array e retorna o número de elementos no array.
// 05 Escreva uma função que recebe um array de números e retorna a soma de todos os elementos.


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// resposta desafio 01
function returnFirst(arr) {
    console.log(arr[0]);
}

returnFirst(numbers);

// resposta desafio 02
function returnLast(arr) {
    let ultimo = arr.length;
    console.log(arr[ultimo -1]);
}

returnLast(numbers);

// resposta desafio 03
function returnIndex(arr, i) {
    let valorIndex = arr[i];
    console.log(valorIndex);
}

returnIndex(numbers, 5);

// resposta desafio 04
function returnQuantidadeElementos(arr) {
    let valorIndex = arr.length;
    console.log(valorIndex);
}

returnQuantidadeElementos(numbers);


// resposta desafio 05
function returnSoma(arr) {
    let novoValor = 0;
    for (let i = 0; i < arr.length; i++) {
        let valorAtual = arr[i]
        novoValor = novoValor + valorAtual;
    }
    console.log(novoValor);
}

returnSoma(numbers);