const livros = require('./main.js');
const menorValor = require('./menorValor')

for (let i = 0; i < livros.length; i++) {
    let menor = menorValor(livros, i);

    let livroAtual = livros[i];
    console.log(livros[i]);
    let livroMenorPreco = livros[menor];
    console.log(livros[menor]);

    livros[i] = livroMenorPreco;
    livros[menor] = livroAtual;
}

console.log(livros);
