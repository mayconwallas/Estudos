window.alert('Seja bem-vindo(a) ao meu site!')
function calcular() {
    let res = document.querySelector('section#res')
    
    
    let valor = window.prompt('Digite um número: ')
    let n1 = valor * 2
    let n2 = valor / 2 
    
    res.innerHTML = (`<p>O dobro de ${valor} é ${n1} e a metade é ${n2}!</p>`)
}