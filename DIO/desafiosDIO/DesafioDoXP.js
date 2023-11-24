/*
    #Entrada#
    crie uma variavel para armazenar o nome e a quantidade de xp de um heroi, 
    depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:


    #processo#
    Se XP for menor do que 1.000 = Ferro
    Se XP for Entre 1.001 e 2.000 = Bronze
    Se XP for Entre 2.001 e 4.000 = prata
    Se XP for Entre 4.001 e 6.000 = ouro
    Se XP for Entre 6.001 e 8.000 = platina 
    Se XP for Entre 8.001 e 9.000 = diamante
    Se XP for Entre 9.001 e 10.000 = ascendente
    Se XP for Entre 10.001 e 11.000 = imortal
    Se XP for maior ou igual a 11.001 = Radiante

    #Saida#
    "O Herói de nome **** está no nivel *****"
*/


let heroi = "Garen";
let xpDoHeroi = 5000;
let nivelDoHeroi;

if (xpDoHeroi <= 1000) {
  nivelDoHeroi = "Ferro"
} else if (xpDoHeroi <= 2000) {
  nivelDoHeroi = "Bronze"
} else if (xpDoHeroi <= 4000) {
  nivelDoHeroi = "Prata"
} else if (xpDoHeroi <= 6000) {
  nivelDoHeroi = "Ouro"
} else if (xpDoHeroi <= 8000) {
  nivelDoHeroi = "Platina"
} else if (xpDoHeroi <= 9000) {
  nivelDoHeroi = "Diamante"
} else if (xpDoHeroi <= 10000) {
  nivelDoHeroi = "Ascendente"
} else if (xpDoHeroi <= 11000) {
  nivelDoHeroi = "Imortal"
} else {
  nivelDoHeroi = "Radiante"
}

console.log(`O Herói ${heroi} está no nivel ${nivelDoHeroi}`)