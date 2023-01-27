let res = document.querySelector('.res')
let data = new Date() 
let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
function hora() {
    let dia = data.getDate()
    let mes = data.getMonth()
    let ano = data.getFullYear()
    let diase = data.getDay()
    let hora = data.getHours()
    let mim = data.getMinutes()
    let second = data.getSeconds()
    res.innerHTML = (`
    <p>Dia: <mark>${dia}</mark></p>
    <p>Mês: <mark>${meses[mes]}</mark></p>
    <p>Ano: <mark>${ano}</mark></p>
    <p>Dia da semana: <mark>${semana[diase]}</mark></p>
    <p>Hora: <mark>${hora}</mark></p>
    <p>Minutos: <mark>${mim}</mark></p>
    <p>Segundos: <mark>${second}</mark></p>
    `)

}