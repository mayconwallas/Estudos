const clientes = require("./clientes.json");
// console.log(clientes);
// console.log(clientes.length); 


function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave] === valor);
}

function encontrar2(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, "nome", "Kirby");
const encontrado2 = encontrar2(clientes, "telefone", "1918820860");
console.log(encontrado);
console.log(encontrado2);