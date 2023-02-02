var listaFilmes = [
  "https://pbs.twimg.com/media/Ey8jy9LW8Ac67fK.jpg", 
  "https://m.media-amazon.com/images/I/51mYEscB19L.jpg", 
  "https://pbs.twimg.com/media/FhO-YuZXwAA3z6I.jpg", 
  "https://i0.wp.com/anmtv.com.br/wp-content/uploads/one-piece-panini.png?ssl=1", 
  "https://i.pinimg.com/236x/8d/5a/4f/8d5a4fffc9ef16404beb1aadc0ef0926.jpg", 
  "https://i.pinimg.com/originals/f6/0d/02/f60d02d28665090bfa92c32938f5e4d0.jpg", 
  "https://i0.wp.com/gamehall.com.br/wp-content/uploads/2016/01/One-Punch-Man-Capa-Anime.jpg?ssl=1", 
  "https://sm.ign.com/ign_br/screenshot/default/kimetsu_6jp8.jpg",
  "https://m.media-amazon.com/images/I/81RzGR06t+L.jpg"
];
var listaTextos = [
  "Full Metal Alchemist", 
  "Samurai Champloo", 
  "Berserk", 
  "One piece", 
  "Naruto", 
  "Dragonball", 
  "One Punch Man", 
  "Kimetsu no Yaiba", 
  "The Promised Neverland"
];

var listaTrailer = [
  "https://www.youtube.com/watch?v=kx0nBaS_q50",
  "https://www.youtube.com/watch?v=xWKzbhAUeZE",
  "https://www.youtube.com/watch?v=fJsOf8JTKXM",
  "https://www.youtube.com/watch?v=JvqcaQJgr-A",
  "https://www.youtube.com/watch?v=ZC5w5nzQ130",
  "https://www.youtube.com/watch?v=LkZhdtb2nyk",
  "https://www.youtube.com/watch?v=Poo5lqoWSGw",
  "https://www.youtube.com/watch?v=JMg8Y0O69vE",
  "https://www.youtube.com/watch?v=48WkJZme5hY"
];


var linkImg = document.querySelector('#linkImg')
var linkTexto = document.querySelector('#linkTexto')
var linkTrailer = document.querySelector('#linkTrailer')
var res = document.querySelector('#res')

function add(){
    var img = String(linkImg.value);
    var texto = String(linkTexto.value);
    var trailer = String(linkTrailer.value)
    if (listaFilmes.indexOf(img) !== -1) {
        alert("O filme já existe na lista");
      } else {
        listaFilmes.push(img);
        listaTextos.push(texto);
        listaTrailer.push(trailer);
        document.querySelector('#linkImg').value = "";
        document.querySelector('#linkTexto').value = "";
        document.querySelector('#linkTrailer').value = "";
        res.innerHTML += `<p id="final"><a href="${listaTrailer[i]}" target="_blank"><img src="${listaFilmes[i]}"></a> ${listaTextos[i]}</p>`;
      }
} 

var i = 0;
while (i < listaFilmes.length) {
    res.innerHTML += `<p id="final"><a href="${listaTrailer[i]}" target="_blank"><img src="${listaFilmes[i]}"></a> ${listaTextos[i]}</p>`;
  i++;
}

function remover(){
    var nomeFilme = document.querySelector('#linkTexto').value;
   
    var posicao = listaTextos.indexOf(nomeFilme)
    
    if (posicao == -1) {
      alert("O filme não foi encontrato");
    } else {
      listaTextos.splice(posicao, 1)
      listaFilmes.splice(posicao, 1)
      listaTrailer.splice(posicao, 1)
      document.querySelector('#linkTexto').value = "";

 res.innerHTML = "";
      var i = 0;
      while (i < listaFilmes.length) {
        res.innerHTML += `<p id="final"><a href="${listaTrailer[i]}" target="_blank"><img src="${listaFilmes[i]}"></a> ${listaTextos[i]}</p>`;
        i++;
}
    }
  }




