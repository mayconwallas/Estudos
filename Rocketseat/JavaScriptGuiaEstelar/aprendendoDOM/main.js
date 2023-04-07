const resposta = document.getElementById("resposta");
const myInput = document.querySelector(".input");
myInput.value = `Mudando informações`
resposta.innerHTML = `<p>Teste</p>`
// resposta.textContent += ` Outro Teste`  

resposta.addEventListener("click", clicou);
resposta.addEventListener("mouseout", dobrouOClick);


function clicou() {
    resposta.innerHTML = `<h1>Teste</h1>`
}

function dobrouOClick() {
    resposta.innerHTML = `<p>Teste</p>`
}