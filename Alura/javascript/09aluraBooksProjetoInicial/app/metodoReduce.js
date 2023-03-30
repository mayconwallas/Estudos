function calcularValorTotalDeLivrosDisponiveis(Livros) {
    return Livros.reduce((acc, livro) => acc + livro.preco, 0)
}