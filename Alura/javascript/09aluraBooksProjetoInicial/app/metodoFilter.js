// const btns = document.querySelectorAll('.btn');
// btns.forEach(btn => btn.addEventListener('click', filtrarLivros)) 

// function filtrarLivros() {
//     const valorBotao = document.getElementById(this.id)
//     const categoria = valorBotao.value
//     let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria);
//     exibirOsLivrosNaTela(livrosFiltrados)
    
// }


const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
}