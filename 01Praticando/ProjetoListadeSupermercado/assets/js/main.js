const form = document.querySelector('form');
const select = form.querySelector('select');
const listaMercado = document.querySelector('.lista');
const inputItem = document.getElementById('item-para-incluir');

function atualizarValorSelecionado() {
    const valorSelecionado = select.options[select.selectedIndex].value;
    const textoSelecionado = select.options[select.selectedIndex].text;
    const itemAdd = inputItem.value;
    console.log(itemAdd);
    if (valorSelecionado)
    listaMercado.innerHTML += `<h3>${textoSelecionado}</h3><ul><li>${itemAdd}</li></ul>`;
    inputItem.value = '';
    }

form.addEventListener('submit', (event) => {
  event.preventDefault(); // previne o envio do formulário
  atualizarValorSelecionado();
});

