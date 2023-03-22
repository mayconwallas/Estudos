const clientes = require("./clientes.json");
// console.log(clientes);
// console.log(clientes.length); 

function apSemComplemento(clientes) {
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento")
        );
    });
}

const filtrados = apSemComplemento(clientes);

console.log(filtrados);