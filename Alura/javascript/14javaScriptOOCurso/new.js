// function User (nome, email) {
//     this.nome = nome
//     this.email = email

//     this.exibirInfos = function() {
//         return `${this.nome}, ${this.email} `
//     }
// }

// const novoUser = new User('Maycon', 'Churupitas@chururu.com');
// console.log(novoUser.exibirInfos());

// function Admin(role){
//     User.call(this, 'Maycon', 'Churupitas@chururu.com');
//     this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype);
// const novoUser = new Admin('Admin');
// console.log(novoUser.exibirInfos());
// console.log(novoUser.role);


// segunda forma de criar

const user = {
    init: function(nome, email){
        this.nome = nome;
        this.email = email;
    },
    exibirInfos: function() {
        return this.nome
    }
}

const novoUser = Object.create(user)
novoUser.init('maycon', 'Churupitas@chururu.com')
console.log(novoUser.exibirInfos());
// console.log(user.isPrototypeOf(novoUser));