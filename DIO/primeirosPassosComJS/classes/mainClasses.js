class Pessoa {
    nome;
    idade;
    altura;
    peso;

    constructor(nome, idade, altura, peso) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
    }
};

function comparaIdade(p1, p2) {
    if(p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`);
    } else if(p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}.`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
    }
}


const marcio = new Pessoa("Marcio Erik", 37);
const maycon = new Pessoa("Maycon Wallas", 34);
const marcos = new Pessoa("Marcos Andre", 30);
const evaldo = new Pessoa("Evaldo Filho", 23);

comparaIdade(marcio, maycon);
comparaIdade(marcio, marcos);
comparaIdade(marcio, evaldo);
comparaIdade(maycon, marcos);
comparaIdade(maycon, evaldo);
comparaIdade(marcos, evaldo);