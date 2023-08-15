import { handlesStatus } from './utils/promise-helpers.js';
 
const meuBotao = document.querySelector('#myButton');

meuBotao.onclick = () =>
  fetch("http://localhost:3000/notas")
    .then(handlesStatus)
    .then((notas) => console.log(notas))
    .catch(console.log);
