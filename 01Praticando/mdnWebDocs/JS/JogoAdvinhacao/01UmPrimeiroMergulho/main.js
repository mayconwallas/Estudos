const random = Math.floor(Math.random()* 100 + 1)
const button = document.querySelector('button');
const showGuesse = document.querySelector('.showGuesse');
const showGuesses = document.querySelector('.showGuesses');
const bigOrSmall = document.querySelector('.bigOrSmall')
const rightOrWrong = document.querySelector('.rightOrWrong')
let rodada = 1;
let valorPalpite;
console.log(random);


function verificaPalpite() {
    const palpite = document.querySelector('input');
    let valorDoPalpite = palpite.value;
    palpite.value = '';
    return valorDoPalpite;
}

button.addEventListener('click', function() {
    valorPalpite = verificaPalpite();
    showGuesses.innerHTML += ` ${valorPalpite},` 
    if (valorPalpite > random ) {
        rightOrWrong.innerHTML = `<p>Seu palpite esta muito alto.</p>`
    } else {
        rightOrWrong.innerHTML = `<p>Seu palpite esta muito baixo</p>`
    }

    if (valorPalpite > random || valorPalpite < random) {
        bigOrSmall.innerHTML = `<p class="missedGuess">Errado!</p>`
    } else {
        bigOrSmall.innerHTML = `<p class="missedGuesss">Parabéns! Seu número está certo!</p>`
        rightOrWrong.innerHTML = `<button class="reinicia">Iniciar novamente</button>`
        const reinicia = document.querySelector('.reinicia');
        reinicia.addEventListener('click', function() {
            document.location.reload(true);
        });
    }

});

// estudo pausado na adicionando variaveis para armazenar
/* 
https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/A_first_splash#exemplo_%E2%80%94_jogo_adivinhe_um_n%C3%BAmero
*/