function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date();
    var hora = data.getHours()
    if (hora < 12 ) {
        msg.innerHTML = `<p>São ${hora} horas, Bom dia!</p>`
        img.innerHTML = `<img id="imagem" src="../../../../imagem/manha.PNG" alt="">`
      } else if(hora < 18 ) {
        msg.innerHTML = `<p>São ${hora} horas, Boa tarde!</p>`
        img.innerHTML = `<img id="imagem" src="../../../../imagem/tarde.PNG" alt="">`
      } else if(hora <= 23 ) {
        msg.innerHTML = `<p>São ${hora} horas, Boa noite!</p>`
        img.innerHTML = `<img id="imagem" src="../../../../imagem/lua.PNG"" alt="">`
      }    
}