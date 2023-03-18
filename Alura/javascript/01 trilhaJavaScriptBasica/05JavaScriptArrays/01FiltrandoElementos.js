const alunos = ["Ana", "Marcos", "Maria", "Mauro", "João", "Guilherme", "Rafaela"];
const medias = [7, 4.5, 8, 7.5, 5, 4, 10];
                            /* por convenção o primeira parametro quando não é usado fica com um "Underline" no lugar.*/    
const reprovados = alunos.filter((_, indice) => {
    if (medias[indice] < 7) {
        return true;        
    } else {
        return false;
    }
});

console.log(reprovados);