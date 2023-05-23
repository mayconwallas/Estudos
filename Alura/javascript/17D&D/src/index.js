import { Personagem } from "./modules/personagem.js"
import { PersonagemViw } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"

const magoPdedinho = new Mago('Pedrinho',5,'Fogo',15,10);
const magoAntonio = new Mago('Antonio',5,'Gelo',10,9)

const personagens = [magoPdedinho, magoAntonio]
console.log(new Mago('gelo', 7, 9))

new PersonagemViw(personagens).render()



// console.log('Insignia de ' + personagemPedrinho.nome + ': ' + personagemPedrinho.obterInsignia())
// console.log('Insignia de ' + personagemJose.nome + ': ' + personagemJose.obterInsignia())
// console.log('Insignia de ' + personagemAna.nome + ': ' + personagemAna.obterInsignia())