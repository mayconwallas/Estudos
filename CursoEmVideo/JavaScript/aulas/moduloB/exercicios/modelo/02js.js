function carregar() {
    var data = new Date();
    var datahoje = data.getFullYear()
    var txtidade = window.document.querySelector('input#txtAge')
    var res = window.document.querySelector('div#res')
    var age = Number(txtidade.value)
    var idade = datahoje - age
    var fsex = document.getElementsByName('radsex')
    var genero = ''
    if (fsex[0].checked){
        genero = 'Homem'
        if (idade < 5 ) {
            res.innerHTML = `Você é ${genero} e tem ${idade} anos e você deve ser mais o menos assim: <br><img src="../../../../imagem/age4.PNG" alt="imagem bebê ate 4 anos">`
        } else if(idade >= 5 && idade <= 12) {
            res.innerHTML = `Você é ${genero} e tem ${idade} anos e você deve ser mais o menos assim: <br><img src="../../../../imagem/age5a12.PNG" alt="menino de ate 12 anos">`
        } else if(idade > 12 && idade <= 18) {
            res.innerHTML = `Você é ${genero} e tem ${idade} anos e você deve ser mais o menos assim: <br><img src="../../../../imagem/age12a18.PNG" alt="jovem de ate 18 anos">`
        } else if(idade > 18 && idade <= 30) {
            res.innerHTML = `Você é ${genero} e tem ${idade} anos e você deve ser mais o menos assim: <br><img src="../../../../imagem/age18a30.PNG" alt="adulto de ate 30 anos">`
        } else if(idade > 30 && idade <= 60) {
            res.innerHTML = `Você é ${genero} e tem ${idade} anos e você deve ser mais o menos assim: <br><img src="../../../../imagem/age30a60.PNG" alt="adulto de ate 60 anos">`
        } else if(idade > 60 && idade <= 80) {
            res.innerHTML = `Você é ${genero} e tem ${idade} anos e você deve ser mais o menos assim: <br><img src="../../../../imagem/age60a80.PNG" alt="idoso de ate 80 anos">`
        } else {
            res.innerHTML = `Você é ${genero} e tem ${idade} anos e você deve ser mais o menos assim: <br><img src="../../../../imagem/age80mais.PNG" alt="idoso mais de 80 anos">`
        }
    } else if (fsex[1].checked){
        genero = 'mulher'
        if (idade < 5 ) {
            res.innerHTML = `Você é ${genero} e tem ${idade} anos e você deve ser mais o menos assim: <br><img src="../../../../imagem/mage4.PNG" alt="imagem bebê ate 4 anos">`
        } else if(idade >= 5 && idade <= 12) {
            res.innerHTML = `Você é ${genero} e tem ${idade} anos e você deve ser mais o menos assim: <br><img src="../../../../imagem/mage5a12.PNG" alt="menino de ate 12 anos">`
        } else if(idade > 12 && idade <= 18) {
            res.innerHTML = `Você é ${genero} e tem ${idade} anos e você deve ser mais o menos assim: <br><img src="../../../../imagem/mage12a18.PNG" alt="jovem de ate 18 anos">`
        } else if(idade > 18 && idade <= 30) {
            res.innerHTML = `Você é ${genero} e tem ${idade} anos e você deve ser mais o menos assim: <br><img src="../../../../imagem/mage18a30.PNG" alt="adulto de ate 30 anos">`
        } else if(idade > 30 && idade <= 60) {
            res.innerHTML = `Você é ${genero} e tem ${idade} anos e você deve ser mais o menos assim: <br> <img src="../../../../imagem/mage30a60.PNG" alt="adulto de ate 60 anos">`
        } else if(idade > 60 && idade <= 80) {
            res.innerHTML = `Você é ${genero} e tem ${idade} anos e você deve ser mais o menos assim: <br><img src="../../../../imagem/mage60a80.PNG" alt="idoso de ate 80 anos">`
        } else {
            res.innerHTML = `Você é ${genero} e tem ${idade} anos e você deve ser mais o menos assim: <br><img src="../../../../imagem/mage80mais.PNG" alt="idoso mais de 80 anos">`
        }
    }
}