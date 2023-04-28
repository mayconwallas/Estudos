const form = document.querySelector('form');
const select = form.querySelector('select');
const listaMercado = document.querySelector('.lista');
const inputItem = document.getElementById('item-para-incluir');

function atualizarValorSelecionado() {
    const valorSelecionado = select.options[select.selectedIndex].value;
    const textoSelecionado = select.options[select.selectedIndex].text;
    const itemAdd = inputItem.value;
    const listaH3 = []; 


    
    function verificaExisteElemeno(listaH3, textoSelecionado, itemAdd) {
      
    }
      
      if (valorSelecionado) {
        const novoH3 = document.createElement('h3');
        const novoTextoH3 = document.createTextNode(textoSelecionado);
        novoH3.appendChild(novoTextoH3);
        
        const novaLista = document.createElement('ul');
        const novoItem = document.createElement('li');
        const novoTextoItem = document.createTextNode(itemAdd);
        novoItem.appendChild(novoTextoItem);
        novaLista.appendChild(novoItem);
        
        listaMercado.appendChild(novoH3);
        listaMercado.appendChild(novaLista);
        listaH3.push(novoH3);// adiciona o novo h3 no no array listaH3
        inputItem.value = '';
      }
      console.log(listaH3.length);
      console.log(listaH3[0]);
    }

form.addEventListener('submit', (event) => {
  event.preventDefault(); // previne o envio do formulário
  atualizarValorSelecionado();
});

