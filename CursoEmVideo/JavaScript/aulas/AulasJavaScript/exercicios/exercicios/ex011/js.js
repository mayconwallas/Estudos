let res = document.querySelector('#res')
function media() {
    let nome = window.prompt('Qual é o nome do aluno?')
    let nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    let nota2 = Number(window.prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}?`))

    res.innerHTML = (`<p>Calculando a média final de <mark>${nome}.</mark></p>`)

    res.innerHTML += (`<p>As notas obtidas foram <mark>${nota1}</mark> e <mark>${nota2}</mark>.</p>`)

    let media = (nota1 + nota2) / 2
    res.innerHTML += (`<p>média final será <mark>${media}.</mark></p>`)

    if (media >= 6) {
        res.innerHTML += (`<p>A mensagem que temos é: <strong>Meus parabéns!</strong>`)
    } else {
        res.innerHTML += (`<p>A mensagem que temos é: <strong>Estude mais pequeno gafanhoto!</strong>`)
    }
}