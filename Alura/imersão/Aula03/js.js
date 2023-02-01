var listaFilmes = ["https://pbs.twimg.com/media/Ey8jy9LW8Ac67fK.jpg", "https://m.media-amazon.com/images/I/51mYEscB19L.jpg" , "https://pbs.twimg.com/media/FhO-YuZXwAA3z6I.jpg" , "https://i0.wp.com/anmtv.com.br/wp-content/uploads/one-piece-panini.png?ssl=1" , "https://i.pinimg.com/236x/8d/5a/4f/8d5a4fffc9ef16404beb1aadc0ef0926.jpg", "https://i.pinimg.com/originals/f6/0d/02/f60d02d28665090bfa92c32938f5e4d0.jpg", "https://i0.wp.com/gamehall.com.br/wp-content/uploads/2016/01/One-Punch-Man-Capa-Anime.jpg?ssl=1", "https://sm.ign.com/ign_br/screenshot/default/kimetsu_6jp8.jpg","https://m.media-amazon.com/images/I/81RzGR06t+L.jpg"];
var listaTextos = ["Full Metal Alchemist", "Samurai Champloo ", "Berserk ", "One piece", "Naruto", "Dragonball", "One panchuman", "Kimetsu no yaiba", "The Promised Neverland"]

var linkImg = document.querySelector('#linkImg')
var linkTexto = document.querySelector('#linkTexto')
var res = document.querySelector('#res')

function add(){
    var img = String(linkImg.value);
    var texto = String(linkTexto.value);
    if (listaFilmes.indexOf(img) !== -1) {
        alert("O filme já existe na lista");
      } else {
        listaFilmes.push(img);
        listaTextos.push(texto)
        res.innerHTML += `<p id="final"><img src="${listaFilmes[i]}"> ${listaTextos[i]}</p>`;
      }
} 


var i = 0;
while (i < listaFilmes.length) {
    res.innerHTML += `<p id="final"><img src="${listaFilmes[i]}"> ${listaTextos[i]}</p>`;
  i++;
}
