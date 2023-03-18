const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
  if (nota <= 9){
    return nota+1;
  } else {
    return nota;
  }
});

// com o operador ternario
const notasAtualizadas1 = notas.map((nota) => {
  return nota +1 >= 10 ? 10 : nota+1;
});

console.log(notasAtualizadas);
console.log(notasAtualizadas1);