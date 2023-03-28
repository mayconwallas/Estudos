const btns = document.querySelectorAll('.btn');

btns.forEach(btn => btn.addEventListener('click', filtarLivros)) 
function filtarLivros() {
    const valorBotao = document.getElementById(this.id);
    const categoria = valorBotao.value;
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    exibirOsLivrosNaTela(livrosFiltrados);

}











