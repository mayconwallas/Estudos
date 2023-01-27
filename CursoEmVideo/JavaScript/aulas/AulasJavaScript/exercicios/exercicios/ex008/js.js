function calcular() {
    let valor = Number(window.prompt('Digite um número: '))
    let res = document.querySelector('#res')
    res.innerHTML = (`<p>O número a ser analisado aqui será o <strong>${valor}</strong></p><hr>`)

    res.innerHTML += `<p>O seu valor absoluto é ${Math.abs(valor)}</p>`
    res.innerHTML += `<p>A sua parte inteira é ${Math.trunc(valor)}</p>`
    res.innerHTML += `<p>O valor inteiro mais próximo é ${Math.round(valor)}</p>`
    res.innerHTML += `<p>A sua raiz quadrada é ${Math.sqrt(valor)}</p>` 
    res.innerHTML += `<p>A sua raiz cúbica é ${Math.cbrt(valor)}</p>`        
    res.innerHTML += `<p>O valor de ${valor}<sup>2</sup> é ${Math.pow(valor, 2)}</p>`
    res.innerHTML += `<p>O valor de ${valor}<sup>3</sup> é ${Math.pow(valor, 3)}</p>`


}