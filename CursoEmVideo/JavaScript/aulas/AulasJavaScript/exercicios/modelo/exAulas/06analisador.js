let add = document.querySelector('input#add')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let pushNumeros = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}


function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1 ){
        return true
    }  else {
        return false
    }
}


function adicionar() {
    if(isNumero(add.value) && !inLista(add.value, pushNumeros)) {
        pushNumeros.push(Number(add.value))
        let item = document.createElement('option')
        item.text = `valor ${add.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('valor inválido ou já encontrado na lista.')
    }
    add.value = ''
    add.focus()
}

function finalizar(){
    if(pushNumeros.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = pushNumeros.length
        let maior = pushNumeros[0]
        let menor = pushNumeros[0]
        let soma = 0
        let media = 0
        for(let pos in pushNumeros) {
            soma += pushNumeros[pos]
            if (pushNumeros[pos] > maior) 
                maior = pushNumeros[pos]
            if (pushNumeros[pos] < menor )
                menor = pushNumeros[pos]
            
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} númedos cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}

