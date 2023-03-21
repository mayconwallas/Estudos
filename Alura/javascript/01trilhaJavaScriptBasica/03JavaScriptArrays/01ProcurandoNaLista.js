const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];
console.log(listaDeAlunosEMedias);

function exibirNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        const alunos = listaDeAlunosEMedias[0];
        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = listaDeAlunosEMedias[1][indice];
        console.log(`O aluno ${aluno} tem a media ${mediaDoAluno}`);
    } else {
        console.log('Aluno não encontrado!');
    }
}

exibirNomeENota('Ana');
