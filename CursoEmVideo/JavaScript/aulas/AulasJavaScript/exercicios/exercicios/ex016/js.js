function carregar() {
    var res = document.querySelector('#res')
    var data = new Date();
    var datahoje = data.getFullYear()
    var idade = prompt('Em que ano você nasceu? ')
    var age = Number(idade)
    var idade2 = datahoje - age
    res.innerHTML = (`<p>Quem nasceu em <mark>${idade}</mark> vai completar <mark>${idade2}</mark> anos em <mark>${datahoje}</mark>.</p>`)
}



