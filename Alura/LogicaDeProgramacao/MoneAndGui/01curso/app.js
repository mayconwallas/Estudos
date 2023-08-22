alert("Boas vindas ao Jogo do número secreto.")
let numeroSecreto = parseInt(Math.random() * (10 - 1) + 1)
let numEscolhido = 0
let tentativas = 1
console.log(numeroSecreto)
while (numeroSecreto != numEscolhido) {
  numEscolhido = parseInt(prompt("Escolha um número entre 1 e 10."))

  if (numEscolhido == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`)
  } else {
    if (numeroSecreto > numEscolhido) {
      alert(`O número secreto é maior que ${numEscolhido}`)
    } else {
      alert(`O número secreto é menor que ${numEscolhido}`)
    }
    tentativas++
    console.log(tentativas)
  }
}
