// Concatenando Arrays

const alunos = ["João", "Juliana", "Caio", "Ana"];
const mediasAlunos = [10, 8, 7.5, 9];

const alunosEMedias = alunos.concat(mediasAlunos);

console.log(alunos);
console.log(mediasAlunos);
console.log(alunosEMedias);

const listaAlunosEMedias = [alunos, mediasAlunos];
console.log(listaAlunosEMedias);
console.log(`A primeira aluna da lista de alunos é: ${listaAlunosEMedias[0][1]} e sua nota é: ${listaAlunosEMedias[1][1]}.`);
console.log(`E o primeiro aluno da lista de alunos é: ${listaAlunosEMedias[0][0]} e sua nota é: ${listaAlunosEMedias[1][0]}.`);