let res = document.querySelector('#res')
let conta = 0

function contar() {
    conta ++ 
    res.innerHTML = `<p>O contador está com <mark>${conta}</mark> cliques.</p>`
}

function zerar() {
    conta = 0
    res.innerHTML = `<p>O contador está com <mark>${conta}</mark> cliques.</p>`
}