let listaDeNumerosSorteados = [];
let numeroMax = 100;
let numeroSecreto = gerarNumeroAleatorio()
const reiniciar = document.getElementById("reiniciar")
const textoH1 = "Jogo do número secreto"
const textoP = "Escolha um número entre 1 e 100"
let tentativas = 1
let respostas = "tentativa"
exibeInicial();

function exibirTextoTela(tag, texto) {
  let campo = document.querySelector(tag)
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 })
}

function exibeInicial() {
    exibirTextoTela("h1", textoH1)
    exibirTextoTela("p", textoP)
}


function verificarChute() {
  let chute = document.querySelector("input").value
  if (chute == numeroSecreto) {
    exibirTextoTela("h1", "Acertou!")
    exibirTextoTela(
      "p",
      `Você descobriu o número secreto em ${tentativas} ${respostas}!`
    )
    reiniciar.removeAttribute("disabled")
  } else {
    if (chute > numeroSecreto) {
      exibirTextoTela("h1", "Errouuu!")
      exibirTextoTela("p", `Número Secreto é menor que ${chute}!`)
    } else {
      exibirTextoTela("h1", "Errouuu!")
      exibirTextoTela("p", `Número Secreto é maior que ${chute}!`)
    }
    tentativas++
    respostas = tentativas > 1 ? "tentativas" : "tentativa"
  }
  limpaCampo()
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroMax + 1)
  let quantidadeDeElementoNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementoNaLista == numeroMax) {
    listaDeNumerosSorteados = [];
  }
  if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function limpaCampo() {
  chute = document.querySelector("input")
  chute.value = ""
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio()
  limpaCampo()
  tentativas = 1
  exibeInicial()
  document.getElementById("reiniciar").setAttribute('disabled', true)
}

console.log(numeroSecreto)
