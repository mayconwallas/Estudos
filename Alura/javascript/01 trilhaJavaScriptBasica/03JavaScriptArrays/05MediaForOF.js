const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;
for (const nota of notas) {
  somaDasNotas += nota;
}

const medias = somaDasNotas / notas.length;
console.log(`A médias das notas é: ${medias}`)



//decremento com for

const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];


for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
}

//outra forma de usar o for

for (let i = numeros.length - 1; i >= 0; i -= 2) {
  console.log(numeros[i]);
}

// outra forma incrementando 
for (let i = 1; i < numeros.length; i += 2) {
  console.log(numeros[i]);
}

//incremento normal
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);   
}


/*mais uma possibilidade é comparar com o valor dentro do array*/
for (let i = numeros.length - 1; numeros[i] >= 300; i -= 2) {
  console.log(numeros[i]);
}

//usando for para dar push no array
  //numeros pares
    const numerosPares = [];

    for (let i = 0; i <= 100; i += 2) {
      numerosPares.push(i);
    }

    console.log(numerosPares);
  
  //numeros impares
    const numerosImpares = [];

    for (let i = 1; i <= 100; i += 2) {
      numerosImpares.push(i);
    }

    console.log(numerosImpares);