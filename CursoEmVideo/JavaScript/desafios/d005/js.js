function converter() {
   let metros = window.prompt('Digite uma distancia em metros (m)')
   var km = metros / 1000
   var hm = metros / 100
   var dam = metros / 10
   var dm = metros * 10
   var cm = metros * 100
   var mm = metros * 1000

   document.getElementById('outro').innerHTML = (`<h1>A distancia de ${metros} metros, corresponde a...</h1>`)
   document.querySelector('#resultado').innerHTML = (`${km} quilômetros (Km)<br> ${hm} hectômetros (Hm)<br> ${dam} decâmetros (Dam)<br> ${dm} decímetros (dm)<br> ${cm} centímetros (cm)<br> ${mm} milímetros (mm)<br> teste`)
}