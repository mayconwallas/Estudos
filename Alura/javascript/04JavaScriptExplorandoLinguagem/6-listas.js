console.log("Trabalhando com Listas");

// const bahia = "salvador";
// const saopaulo = "são paulo";
// const riodejaneiro = "rio de janeiro";
// const distritofederal = "brasília";
// const minasgerais = "belo horizonte";
// const goias = "goiania";

// console.log("destinos possíveis:");
// console.log(bahia, saopaulo, riodejaneiro, distritofederal, minasgerais, goias);


//declarando array

const listaDeDestinos = new Array(
    "Belo Horizonte",
    "Brasília",
    "Goiania",
    "Rio de Janeiro",
    "São Paulo",
    "Salvador"
);

console.log("destinos possíveis:");
console.log(listaDeDestinos);

// para colocar mais informação na lista usa o push.
console.log("destinos possíveis:");
listaDeDestinos.push("Porto de Galinha");
console.log(listaDeDestinos);

//para retirar nome da lista usa splice.
console.log("destinos possíveis:");
listaDeDestinos.splice(4,1);
console.log(listaDeDestinos);

// para mostrar so um destino usa listaDeDestinos[1] e a possição do item
console.log("destinos possíveis:");
console.log(listaDeDestinos[1]);