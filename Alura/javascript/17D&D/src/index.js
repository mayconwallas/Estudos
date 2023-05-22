import { Personagem } from "./modules/personagem.js"
import { PersonagemViw } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"

const personagemPedrinho = new Personagem('Pedinho', 5, 'Mago', 50, 150);
const personagemJose = new Personagem('Jose', 3, 'Arqueiro', 100, 100);
const personagemAna = new Personagem('Ana', 5, 'Guerreiro', 150, 50);

const personagens = [personagemPedrinho, personagemJose, personagemAna]
console.log(new Mago('gelo', 7, 9))

new PersonagemViw(personagens).render()



// console.log('Insignia de ' + personagemPedrinho.nome + ': ' + personagemPedrinho.obterInsignia())
// console.log('Insignia de ' + personagemJose.nome + ': ' + personagemJose.obterInsignia())
// console.log('Insignia de ' + personagemAna.nome + ': ' + personagemAna.obterInsignia())