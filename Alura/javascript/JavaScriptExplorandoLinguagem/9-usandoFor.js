console.log("\nTrabalhando com condicionais");
//declarando array
const listaDeDestinos = new Array(
    "Belo Horizonte",
    "Brasília",
    "Goiania",
    "Rio de Janeiro",
    "São Paulo",
    "Salvador"
);
const idadeComprador = 17;
const acompanhada = false;
var comprouPassagem = false;
const destino = "Salvador"

console.log("\n Destinos possíveis: ");
console.log(listaDeDestinos);
    
const podeComprar = idadeComprador >= 18 || acompanhada == true;

const destinos = listaDeDestinos.length;
let destinoExiste = false;

for (let i = 0; i < destinos; i++) {
    if (listaDeDestinos[i] == destino) {
        destinoExiste = true;
        break;
    }
}

console.log("Destino existe: ", destinoExiste);
  
if (podeComprar && destinoExiste) {
    console.log("Boa viagem");
} else {
    console.log("Desculpe tivemos um erro!");
}
