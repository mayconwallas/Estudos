import { Personagem } from "./modules/personagem.js"
import { PersonagemViw } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { MultiClasse } from "./modules/multClasse.js";
import { Guerreiro } from "./modules/guerreiro.js"

const guerreiraJorge = new Guerreiro('Jorge', 8);
const magoAntonio = new Mago('Antonio',5,'Gelo',10,9);
const arqueiroBruno = new Arqueiro('Bruno', 7, 8);
const magaJulia = new Mago('Julia',5,'Fogo',15,10);
const arqueiroMagoChico = new MultiClasse('Chico', 7, 10, 'ar', 4, 8)

const personagens = [magoAntonio, magaJulia, arqueiroBruno, arqueiroMagoChico, guerreiraJorge]


new PersonagemViw(personagens).render()
console.log(Personagem.verificarVencedor(arqueiroBruno,arqueiroMagoChico ));



// console.log('Insignia de ' + personagemPedrinho.nome + ': ' + personagemPedrinho.obterInsignia())
// console.log('Insignia de ' + personagemJose.nome + ': ' + personagemJose.obterInsignia())
// console.log('Insignia de ' + personagemAna.nome + ': ' + personagemAna.obterInsignia())