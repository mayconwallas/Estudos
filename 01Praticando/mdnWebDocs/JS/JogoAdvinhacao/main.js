const numAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(numAleatorio);

let turno = 1;
const botao = document.querySelector('.botao')
let palpite = document.querySelector('.palpite');
let palpiteValor;
console.log(botao);
console.log(palpite);
console.log(palpiteValor);

botao.addEventListener('click', function () {
    palpiteValor = palpite.value;
})

console.log(palpiteValor);