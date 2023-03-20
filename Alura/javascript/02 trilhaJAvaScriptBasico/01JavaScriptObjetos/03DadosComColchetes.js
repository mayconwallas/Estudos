const cliente = {
    nome: "Maycon",
    idade: 33, 
    cpf: "00011144423",
    email:"testando@email.com"
};

console.log(cliente["nome"]);


const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chave => {
    console.log(cliente[chave]);
}))