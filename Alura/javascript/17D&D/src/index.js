import { Personagem } from "./modules/personagem.js"

/*const personagemPedrinho = {
    nome: 'Pedrinho',
    vida: 7,
    mana: 12,
    level: 5,
    tipo: 'Mago',
}*/

/*const personagemJose = {
    nome: 'Jose',
    vida: 7,
    mana: 6,
    level: 3,
    tipo: 'Arqueiro',
}*/

/* const personagemAna = {
    nome: 'Ana',
    vida: 8,
    mana: 10
} */

const personagemPedrinho = new Personagem('Pedinho', 5, 'Mago');
const personagemJose = new Personagem('Jose', 1, 'Arqueiro');
const personagemAna = new Personagem('Ana', 5, 'Barbara');

console.log('Insignia de ' + personagemPedrinho.nome + ': ' + personagemPedrinho.obterInsignia())
console.log('Insignia de ' + personagemJose.nome + ': ' + personagemJose.obterInsignia())
console.log('Insignia de ' + personagemAna.nome + ': ' + personagemAna.obterInsignia())