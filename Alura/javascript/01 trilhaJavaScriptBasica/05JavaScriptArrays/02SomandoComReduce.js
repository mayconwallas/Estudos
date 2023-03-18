const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function claculaMedia(notasDaSala) {
    const novasNotas = notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);
    const media = novasNotas / notasDaSala.length;

    console.log(media);
}

claculaMedia(salaJS);
claculaMedia(salaJava);
claculaMedia(salaPython);