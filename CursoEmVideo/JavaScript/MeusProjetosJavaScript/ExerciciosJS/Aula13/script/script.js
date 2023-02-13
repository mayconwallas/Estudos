function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[erro] Verifique os dados e tente novamente!')
    } else {
        //var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade Calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (document.getElementById('mas').checked) {
            gênero = 'Homem'
            if(idade >=0 && idade < 10) {
                //bebê
               img.setAttribute('src', 'imagem/foto-bebe-m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagem/foto-jovem-m.png')
            } else if ( idade < 50) {
                //adulto
                img.setAttribute('src', 'imagem/foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagem/foto-idoso-m.png')
            }
        } else if (document.getElementById('fem').checked) {
            gênero = 'Mulher'
            if(idade >=0 && idade < 10) {
                //bebê
                img.setAttribute('src', 'imagem/foto-bebe-f.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagem/foto-jovem-f.png')
            } else if ( idade < 50 ) {
                //adulto
               img.setAttribute('src', 'imagem/foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagem/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}