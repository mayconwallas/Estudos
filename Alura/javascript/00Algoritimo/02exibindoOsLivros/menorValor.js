const livros = require('./main.js');



function menorValor(livros, posicaoInicial){
    let maisBarato = posicaoInicial;
    for (let atual = posicaoInicial; atual < livros.length; atual++) {
        if(livros[atual].preco < livros[maisBarato].preco) {
            maisBarato = atual
        }
    }
    return maisBarato;
}
module.exports = menorValor;