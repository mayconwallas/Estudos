let res = document.querySelector('.res')
function valor() {
    let val1 = Number(prompt(`Digite um número: `))
    let val2 = Number(prompt(`Digite outro número:  `))

    if (val1 < val2) {
        res.innerHTML = (`<p>Analisando os valores <mark>${val1}</mark> e <mark>${val2}</mark>, o maior valor é <mark>${val2}</mark></p>`)
    } else {
        res.innerHTML = (`<p>Analisando os valores <mark>${val1}</mark> e <mark>${val2}</mark>, o maior valor é <mark>${val1}</mark></p>`)
    }

}