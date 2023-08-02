function modoDeLuminosidade() {
    const body = document.body;
    // muda classe retirando ou incluindo
    body.classList.toggle('light');
    
    const img = document.querySelector(".profile img");
    if(body.classList.contains('light')) {
        img.setAttribute('src', './assets/wallas03.jpeg');
        img.setAttribute('alt', 'imagem do wallas usando oculos escuro')
    } else {
        img.setAttribute("src", "https://github.com/mayconwallas.png");
        img.setAttribute("alt", "imagem do wallas olhando para o lado usando um terno branco.")
    }


}
