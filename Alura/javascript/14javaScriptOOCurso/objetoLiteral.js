const user = {
    nome: "Maycon",
    email: "M@W.com",
    nascimento: "2020/12/20",
    role: "Supremo",
    ativo: true,
    exibirInfor: function() {
        console.log(this.nome, this.email, this.role)
    }
}

const exibir = function() {
    console.log(this.nome, this.email, this.role)
}

const exibirNovo = exibir.bind(user);
exibirNovo();