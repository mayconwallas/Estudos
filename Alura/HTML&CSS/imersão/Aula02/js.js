let res = document.querySelector('#res')
let computador = 0
let jogador = 0
let conta = 1

function sortear() {
    let min = 1 
    let max = 1000
    let dif = max - min
    let aleatorio = Math.random()
    computador = min + Math.trunc(dif * aleatorio)
}

function contar() {
    conta ++
}

function jogar() {
    jogador = Number(window.prompt('Qual é o seu palpite?'))
    if (jogador < computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MAIOR</strong>! numero de chutes <mark>${conta}</mark></p>`
    } else if (jogador > computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MENOR</strong>! numero de chutes <mark>${conta}</mark></p>`
    } else if (jogador == computador) {
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou  com <mark>${conta}</mark> chutes! Eu tinha sorteado o valor ${computador}!</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }
}