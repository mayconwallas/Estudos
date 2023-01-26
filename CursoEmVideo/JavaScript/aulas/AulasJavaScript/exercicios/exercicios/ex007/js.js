function media(){
let nome = window.prompt('Qual o nome do aluno? ')
let nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}`))
let nota2 = Number(window.prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}?`))
soma = nota1 + nota2
media = soma / 2 
let res = document.querySelector('#res')
res.innerHTML = (`<p>Calculando a média final de <mark>${nome}</mark>.</p> <p>As notas obtidas foram <mark>${nota1}</mark> e <mark>${nota2}</mark></p><p>A média final será <mark>${media}</mark></p>`)
}