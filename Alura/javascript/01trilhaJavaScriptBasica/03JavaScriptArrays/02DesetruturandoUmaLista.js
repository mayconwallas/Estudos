const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibirNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        //const alunos = listaDeAlunosEMedias[0];
        //const medias = listaDeAlunosEMedias[1];
        /*melhorando o codigo abaixo uma linha fazenod o mesmo que as duas linhas acima*/
        const [alunos, medias] = listaDeAlunosEMedias;
        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];
        console.log(`O aluno ${aluno} tem a media ${mediaDoAluno}`);
    } else {
        console.log('Aluno não encontrado!');
    }
}

exibirNomeENota('Caio');
