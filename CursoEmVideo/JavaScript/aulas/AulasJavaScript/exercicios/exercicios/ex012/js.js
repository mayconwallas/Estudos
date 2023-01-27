function teste() {
    let num = Number(prompt('Digite um número: '))
    let res = document.querySelector('#res')
    let resto = num % 2

    if (resto == 0) {
        res.innerHTML = (`<p>O número ${num} que foi digitado é <strong>PAR!</strong></p>`)
    } else {
        res.innerHTML = (`<p>O número ${num} que foi digitado é <strong>ÍMPAR!</strong></p>`)
    }
    
}