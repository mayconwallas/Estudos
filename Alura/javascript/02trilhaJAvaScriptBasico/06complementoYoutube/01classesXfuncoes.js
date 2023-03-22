const livro = {
    nome: "React Native",
    editora: "Casa do Código",
    paginar: 185,
    anunciar: function (){
        console.log("A Alura indica o livro " + this.nome + "!")
    } 
}

livro.anunciar();