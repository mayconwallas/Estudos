const clientes = require("./clientes.json");
// console.log(clientes);
// console.log(clientes.length); 

function ordenar(lista, propriedade) {
    const resultado = lista.sort((a,b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1;
        }
        if (a[propriedade] > b[propriedade]) {
            return 1;
        }
        return 0;
    });
    return resultado;
}

const ordenandoNome = ordenar(clientes, "nome");
console.log(ordenandoNome);