const nota = 95;

function convertNotas() {
    const notaA = nota >= 90;
    const notaB = nota > 80 && nota < 90;
    const notaC = nota > 70 && nota < 80;
    const notaD = nota > 60 && nota < 70;
    const notaE = nota > 50 && nota < 60;
    const notaF = nota > 40 && nota < 50; // não usada...
    if (notaA) {
        console.log("A")
    } else if (notaB) {
        console.log("B")
    } else if (notaC) {
        console.log("C")
    } else if (notaD) {
        console.log("D")
    } else if (notaE) {
        console.log("E")
    } else {
        console.log("F")
    }
}

convertNotas(nota)

