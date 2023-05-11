import { Personagem } from "./modules/personagem.js";

/* const personagemPedrinho = {
    nome: 'Pedrinho',
    vida: 7,
    mana: 12,
    level: 5,
    tipo: 'Mago',
} */

const personagemJose = {
    nome: 'Jose',
    vida: 7,
    mana: 6,
    level: 3,
    tipo: 'Arqueiro',
}

const personagemAna = {
    nome: 'Ana',
    vida: 8,
    mana: 10,
    level: 3,
    tipo: 'Mago',
}


const personagemPedrinho = new Personagem()
personagemPedrinho.nome = 'Pedrinho'
personagemPedrinho.vida = 12
personagemPedrinho.mana = 7
personagemPedrinho.level = 1
personagemPedrinho.tipo = 'Mago'
personagemPedrinho.descricao = 'humano estudioso e com muita abição'

console.log(personagemPedrinho);