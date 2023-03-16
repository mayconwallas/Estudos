// Funções estudo completo
const apresentacao = "Olá, meu nome é: "
const nome = "Maycon Wallas ";
const sobreNome = "Balbino da Silva"
const nomeCompleto = nome + sobreNome;
const idade = 2023 - 1989;
const cidadeNacimento = "Brasília - DF"
const mensagemCompleta = `Olá, meu nome é ${nomeCompleto} tenho ${idade} anos de idade e nasci em ${cidadeNacimento}.`; 



// uma função segue o padrão abaixo (tem outras formas também.)

function ImprimeTexto (chubaca) {
    console.log(chubaca);
}

//aqui estamos chamando e executando a função
ImprimeTexto("Olá chubaca kkkk");

//podemos usa a mesma função mais de uma vez
ImprimeTexto("Olá chubaca novamente");

// ela tambem aceita variaveis

ImprimeTexto(mensagemCompleta);


// existe  formas de escrever uma function
//funcao sem parametro
function soma() {
    return 2 + 2;
}

console.log(soma());
ImprimeTexto(soma());