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
const idadeComprador = 18;
const acompanhada = false;
var comprouPassagem = false;
const destino = "Salvador"

console.log("\n Destinos possíveis: ");
console.log(listaDeDestinos);
    
const podeComprar = idadeComprador >= 18 || acompanhada == true;

let contador = 0;
const destinos = listaDeDestinos.length;
let destinoExiste = false;

while (contador < destinos) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador++
}

console.log("Destino existe: ", destinoExiste);
