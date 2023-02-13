function converter() {
   let metros = window.prompt('Digite uma distancia em metros (m)')
   var km = parseInt(metros) * 1.8 + 32
   var hm = parseInt(metros) + parseInt(273.15)

   document.getElementById('outro').innerHTML = (`<h1>A Temperatura de ${metros}°C, corresponde a...</h1>`)
   document.querySelector('#resultado').innerHTML = (`${km.toFixed(2)} °F (Fahrenheit) <br> ${hm.toFixed(2)} °k (Kelvin)<br> teste`)
}