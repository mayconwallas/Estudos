class Pessoa {
    nome;
    peso;
    altura;
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        let imc = this.peso / (this.altura * this.altura);
        return imc
    }

    classificaPeso(imc) {
        if (imc < 18.5) {
            console.log("MAGREZA");
        } else if (imc >= 18.5 && imc < 24.9) {
            console.log("NORMAL");
        } else if (imc == 25 && imc < 29.9) {
            console.log("SOBREPESO");
        } else if (imc == 30 && imc < 39.9) {
            console.log("OBESIDADE");
        } else {
            console.log("OBESIDADE GRAVE");
        }
    }
}

const maycon = new Pessoa("Maycon", 119, 1.81);
let imc1 = maycon.calcularIMC();
maycon.classificaPeso(imc1);

const jose = new Pessoa("José", 70, 1.75);
let imc2 = jose.calcularIMC();
jose.classificaPeso(imc2);