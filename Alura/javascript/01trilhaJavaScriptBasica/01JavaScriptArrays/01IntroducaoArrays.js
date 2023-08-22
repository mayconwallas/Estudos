//const nota01 = 10;
//const nota02 = 6.5;
//const nota03 = 8;
//const nota04 = 7.5;
//const media = (nota01 + nota02 + nota03 + nota04) / 4;
//console.log(media);

//const notas = [10, 6.5, 8, 7.5];
//const media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;
//console.log(media);

// const notas = [10, 6.5, 8, 7.5];

// const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

// console.log(media);

const notas = [10, 6.5, 8, 7.5, 1, 2, 10, 5]; 

function somandoArray(arrayComNotas) {
    let element = 0;
    for (let i = 0; i < arrayComNotas.length; i++) {
      element += arrayComNotas[i]
    }
    return element
}

function media(array) {
    const numSomado = somandoArray(array);
    const media = numSomado / array.length;
    return media;
}

console.log(media(notas));