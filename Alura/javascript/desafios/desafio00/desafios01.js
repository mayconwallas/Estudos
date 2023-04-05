function soma(x, y) {
    return x + y;
}

function tamanho(informacao) {
    return informacao.length;
}


const myArray = [4, 10, 2, 8, 20, 3, 50, 1, 15];

function somadorDeArr(arr) {
    const maiorValor = arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue);
    return maiorValor;
}


function verificaMaior(arr) {
    let currentValue = 0;
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if(element > currentValue) {
            currentValue = element;
        }
    }
    return currentValue;
}


dadosPessoa = { 
    nome: "Maria",
    idade: 25 };

dadosPessoa1 = { 
    nome: "Maycon",
    idade: 33 };

function pegaDados(objectHere) {
    const name = objectHere.nome;
    const age = objectHere.idade;
    return `Nome: ${name}, Idade: ${age}`; 
}

const maiusculas = ["cachorro", "gato", "elefante", "pato"];

function transform(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let element = String(arr[i]).toUpperCase();
        newArr.push(element);
    }
    return newArr;
}
