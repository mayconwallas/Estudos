let listaDeItens = []; // criando o array

// pegando os itens do html para manipular no javascritp
const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receber-item");
const ulItens = document.getElementById("lista-de-itens");
const ulItensComprados = document.getElementById("itens-comprados");

// add evendo de submit para atualizar dados do form
form.addEventListener('submit', function (evento) {
    evento.preventDefault();// prefinir que atualiza a pagina
    salvarItem() // chamada da function abaixo
    mostrarItem()//cria o li com os dados do array
    itensInput.focus()
})

// function que guarda o valor digitado dentro do array
function salvarItem() {
    // pegando valor digitado
    const comprasItem = itensInput.value
    // verificando duplicidade
    const checarSecaoDuplicado = listaDeItens.some((elemento) =>  elemento.valor.toUpperCase() === comprasItem.toUpperCase())
    
    // o teste retorna true caso já tenha um item igual adicionado e falso no caso oposto.
    // se for true (verdadeiro) vai dar um alert se for false (falso) add o item
    if(checarSecaoDuplicado) {
        //resposta foi true
        alert('item já consta na sua lista.');
    } else {
    //resposta foi false
    //guartando valor dentro do array
    listaDeItens.push ({
        valor: comprasItem,
        checar: false
    })
    }
    // limpa o input apos add o item.
    itensInput.value = '';
}

function mostrarItem() {
    ulItens.innerHTML = '';
    ulItensComprados.innerHTML = '';
    listaDeItens.forEach((elemento, index) => {
        if (elemento.checar) {
            ulItensComprados.innerHTML += `
            <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
        <div>
            <input type="checkbox" checked class="is-clickable" />  
            <span class="itens-comprados is-size-5">${elemento.valor}</span>
        </div>
        <div>
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
    </li>
            `
        } else {

        ulItens.innerHTML += `
            <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
                <div>
                    <input type="checkbox" class="is-clickable" />
                    <input type="text" class="is-size-5" value="${elemento.valor}"></input>
                </div>
                <div>
                    <i class="fa-solid fa-trash is-clickable deletar"></i>
                </div>
            </li>
        `
        }
    })

    const inputCheck = document.querySelectorAll('input[type="checkbox"]')

    inputCheck.forEach(i => {
        i.addEventListener('click', (evento) => {
            const valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value')
            listaDeItens[valorDoElemento].checar = evento.target.checked
            mostrarItem()
        })
    })

    const deletarObjetos = document.querySelectorAll('.deletar');
    deletarObjetos.forEach(i => {
        i.addEventListener('click', (evento) => {
            const valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value')
            listaDeItens.splice(valorDoElemento, 1);
            mostrarItem()
        })
    })

    
    
    console.log(deletarObjetos);
}