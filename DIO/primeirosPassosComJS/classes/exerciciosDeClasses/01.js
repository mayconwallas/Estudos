class Carro {
    marca;
    cor;
    autonomia;

    constructor (marca, cor, autonomia) {
        this.marca = marca;
        this.cor = cor;
        this.autonomia = 1 / autonomia;
    }

    valorGasto(valorLitro, kmPercorridos) {
        let valorGastoViagem; 
        let ress;
        valorGastoViagem = (this.autonomia * kmPercorridos) * valorLitro;
        ress = `Seu carro da marca ${this.marca} vai gastar ${valorGastoViagem} para percorrer os ${kmPercorridos}Km`;
        return console.log(ress);
    }
}

const fiat = new Carro("fiat", "Branco", 15);
const opala = new Carro("Chevrolet", "preto", 4);
fiat.valorGasto(5.63, 100);
opala.valorGasto(5.63, 100);

