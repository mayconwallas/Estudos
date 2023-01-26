function calcular() {
   let res = document.querySelector('#res')
   let valor1 = Number(window.prompt('Digite um número: '))
   let valor2 = Number(window.prompt('Digite outro número: '))
   let resposta = valor1 + valor2
   res.innerHTML = (`A Soma de <mark>${valor1}</mark> e <mark>${valor2}</mark> é igual a <strong>${resposta}</strong>!`)
}