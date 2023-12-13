/* 
    Instruções para entrega
# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis ok
- Operadores ok
- Laços de repetição ok
- Estruturas de decisões ok
- Funções ok
- Classes e Objetos ok

## Objetivo:

Crie uma classe genérica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome ok
- idade ok 
- tipo (ex: guerreiro, mago, monge, ninja ) ok

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}") ok 
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe ok
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela  ok
abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
    ex: mago atacou usando magia
    guerreiro atacou usando espada

*/

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque(tipo) 
        
        function ataque(tipo) {
            if(tipo == "mago") {
            ataque = "magia"
            } else if (tipo == "guerreiro") {
            ataque = "espada"
            } else if (tipo == "monge") {
            ataque = "artes marciais"
            } else if (tipo == "ninja") {
            ataque = "jutsu"
            } 
            return ataque;
        }
    }
    atacar() {
        console.log(`o ${this.tipo} atacou usando ${this.ataque}`);
    }
}

const novoHeroi = new Heroi("Joaquina", 18, "ninja");

novoHeroi.atacar();