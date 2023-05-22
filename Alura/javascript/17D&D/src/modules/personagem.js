export class Personagem {
    nome
    vida = 100
    mana = 100
    level
    tipo
    descricao
constructor(nome, level, tipo, vida, mana) {
    this.nome = nome
    this.level = level
    this.tipo = tipo
    this.vida = vida
    this.mana = mana
}
    obterInsignia() {
        if (this.level >= 5){
            return `Implacavel ${this.tipo}`
        }
        return `${this.tipo} iniciante`
    }
}