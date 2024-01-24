class Carro {
    marca;
    cor;
    autonomia;

    constructor (marca, cor, autonomia) {
        this.marca = marca;
        this.cor = cor;
        this.autonomia = autonomia;
    }

    valorGasto(valorLitro, kmPercorridos) {
        let valorGastoViagem; 
        let ress;
        valorGastoViagem = this.autonomia * kmPercorridos * valorLitro;
        ress = `Seu carro da marca ${this.marca} vai gastar ${valorGastoViagem} para percorrer os ${kmPercorridos}Km`;
        return console.log(ress);
    }
}

const fiat = new Carro("fiat", "Branco", 1/15);
const opala = new Carro("Chevrolet", "preto", 1/4);
fiat.valorGasto(5, 70);
opala.valorGasto(5, 100);

