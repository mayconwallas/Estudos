// vamos ter varias praticas

/* Pratica 01
let mensagem = "Olá, Mundo!"
let mensagem02 = "O que esta achando do conteudo?"
window.alert(mensagem)
window.confirm(mensagem02)
let mensagem03 = window.prompt("Escreva alguma coisa")
window.alert(`Você Escreveu "${mensagem03}".`)
*/

//  pratica 02 
//let nome = window.prompt("Qual seu nome?")
//window.alert(`é um grande prazer em te conhecer ${nome}`)

// pratica 03
/*let sair = "não"
while (sair != "s") {
    let res = 1
let n1 = Number(window.prompt("Digite um numero:"))
let n2 = Number(window.prompt("Digite outro numero:"))
let operador = prompt("Você quer somar '+' ou subtrair '-' ?")
    if (operador == "somar" || operador == "+") {
            res = n1 + n2
            alert(`o resultado da some de ${n1} + ${n2} é ${res}`)       
    } else if (operador == "subtrair" || operador == "-"){
            res = n1 - n2
            alert(`o resultado da subtração de ${n1} - ${n2} é ${res}`)
    } 
    sair = prompt("para sair digite s ou para continhar digite c")
}
 */
var estilo = window.document.getElementById('area')
estilo.addEventListener('mouseenter', entrar)
estilo.addEventListener('mouseout', sair)
function entrar() {
    estilo.style.background = 'red'
}
function sair() {
    estilo.style.background = 'aqua'
}

function somar() {
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.querySelector('input#txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var soma = n1 + n2      
    res.innerHTML = `Resultado: ${soma}`
}