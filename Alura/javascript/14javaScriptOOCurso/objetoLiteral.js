const user = {
    nome: "Maycon",
    email: "M@W.com",
    nascimento: "2020/12/20",
    role: "Supremo user",
    ativo: true,
    exibirInfor: function() {
        console.log(this.nome, this.email, this.role)
    }
}
// const exibir = function() {
//     console.log(this.nome, this.email, this.role)
// }
// const exibirNovo = exibir.bind(user);
// exibirNovo();

const admin = {
    nome: "Wallas",
    email: "M@W.com",
    role: "Supremo admin",
    criarCurso() {
        console.log("curso criado!");
    }
}

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfor();
user.exibirInfor();