// Arrow Function

//primeiro função normal

function apresentar(nome) {
    return `Olá meu nome é ${nome}`
}

//agora a forma da arrow function
        // arrowfunction classica
            //com apenas um linha
const apresentarArrow = nome => `Olá meu nome é ${nome}`;
const soma = (num1, num2) => num1+num2;

            //com mais de um linha
const numerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "Somente numeros de 1 a 9";
    } else {
       return num1 + num2;
    }
}

console.log(apresentar('Maycon'));
console.log(apresentarArrow('Wallas'));
console.log(soma(10, 15));
console.log(numerosPequenos(5, 7));


