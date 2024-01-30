class Pokemon {
    nome;
    tipo;
    numero;

    constructor(nome, tipo, numero) {
        this.nome = nome;
        this.tipo = tipo;
        this.numero = numero;
    }

}

const pokemons = [] 
pokemons.push(new Pokemon("bubasalro", "Grama", 1));
pokemons.push(new Pokemon("charmander", "fogo", 4));

console.log(pokemons[0].nome)