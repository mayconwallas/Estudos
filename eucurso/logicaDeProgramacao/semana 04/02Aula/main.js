let res = document.querySelector(".container__conteudo"); 
function alertaInteiro(mensagem) {
    let casoString = parseInt(mensagem)
    if (casoString == NaN) {
        res.innerHTML += `<p> ${mensagem}</p>`;
    } else {
        res.innerHTML += `<p> ${mensagem}</p>`;
    }
}

alertaInteiro(10);
alertaInteiro("Olá, Mundo!");


// ou podemos tratar o erro e informa o usuario

function alertaInteiro2(numero) {
   res.innerHTML += (isNaN(parseInt(numero))?`<p>Entrada invalida!</p>`: `<p>${numero}</p>`);
}

alertaInteiro2(10);
alertaInteiro2("Olá, Mundo!");


// desafio da aula 02:

function desafio(num) {
    let verificaString = parseInt(num)
    if (!isNaN(verificaString)) {
        res.innerHTML += `<p> ${num}</p>`;
    }
}

desafio(10);
desafio("testando strings")
desafio(20);
desafio("testando strings")
desafio(100);
desafio("testando strings")
