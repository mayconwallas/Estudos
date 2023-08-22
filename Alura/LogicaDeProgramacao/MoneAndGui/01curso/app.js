alert("Boas vindas ao Jogo do número secreto.");
let nivelDoJogo = prompt("Escolha a dificuldade do jogo [1]easy(1 a 10), [2]medium(1 a 100), [3]hard(1 a 1000)");
if (nivelDoJogo == 1) {
  numeroDoJogo = 10;
} ;
if (nivelDoJogo == 2) {
  numeroDoJogo = 100
};
if (nivelDoJogo == 3) {
  numeroDoJogo = 1000
};
let numeroSecreto = parseInt(Math.random() * numeroDoJogo + 1)
let numEscolhido = 0;
let tentativas = 1;
console.log(numeroSecreto);
while (numeroSecreto != numEscolhido) {
  numEscolhido = parseInt(prompt(`Escolha um número entre 1 e ${numeroDoJogo}.`))
  if (numEscolhido == numeroSecreto) {
    break;
  } else {
    if (numeroSecreto > numEscolhido) {
      alert(`O número secreto é maior que ${numEscolhido}`);
    } else {
      alert(`O número secreto é menor que ${numEscolhido}`);
    }
    tentativas++;
    console.log(tentativas);
  }
}

let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
alert(
  `Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa} .`
);
// if (tentativas > 1) {
//   alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//   alert(
//     `Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`
//   )
// }
