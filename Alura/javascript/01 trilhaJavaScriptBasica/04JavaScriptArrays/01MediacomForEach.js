const notas = [10, 6.5, 8, 7.5];


// forEach aceita outro parametro como indice
// notas.forEach(function (nota, indice) {
//     somaDasNotas += nota;
//  // para verificar o indice do array notas
//     console.log(indice)
// });


/* o forEach já tem a instrução de fazer o loop para cada item dentro do array*/
let somaDasNotas = 0;
notas.forEach(function (nota) {
    somaDasNotas += nota;
});

const media = somaDasNotas / notas.length; 
console.log(media);