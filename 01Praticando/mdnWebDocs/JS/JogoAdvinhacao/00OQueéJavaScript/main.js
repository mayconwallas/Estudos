const tagP = document.querySelector('p');

tagP.addEventListener('click', atualizarNome);

function atualizarNome() {
    let nome = prompt('Qual o nome que deseja usar?');
    tagP.textContent = `Jogador 1: ${nome}`;
}

function criarParagrafo() {
    let para = document.createElement('p');
    para.textContent = 'Você clicou no botão!';
    document.body.appendChild(para);
    }

    const botoes = document.querySelectorAll('button');

    for(var i = 0; i < botoes.length ; i++) {
    botoes[i].addEventListener('click', criarParagrafo);
    }