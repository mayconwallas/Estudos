function teste() {
    let num = Number(prompt('Digite um número: '))
    let res = document.querySelector('#res')
    let resto = num % 2

    if (resto == 0) {
        res.innerHTML = (`O número ${num} que foi digitado é <strong>PAR!</strong>`)
    } else {
        res.innerHTML = (`O número ${num} que foi digitado é <strong>ÍMPAR!</strong>`)
    }
    
}