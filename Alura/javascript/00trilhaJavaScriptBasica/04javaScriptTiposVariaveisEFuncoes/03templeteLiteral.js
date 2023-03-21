// Templete string
// é representada pelo acento grave duas vezes ``
/* usando o templete podemos não so colocar as outras aspas (simples e duplas) como tambem contatenar com variaveis tudo isso na mesma "aspas" ou melhor nos mesmo acentos graves kkkk */

//exemplo normal de com pode ser usado

const apresentacao = "Olá, meu nome é: "
const nome = "Maycon Wallas ";
const sobreNome = "Balbino da Silva"

console.log(apresentacao + nome + sobreNome);

// outra forma

console.log("Olá, meu nome é: " + nome + sobreNome);

// agora usando a templete string

console.log(`${apresentacao}${nome}${sobreNome}`);
// ate aqui parece nao ter muita mudança

//porem repare no poder que você ganha.
console.log(`${apresentacao}${nome}${sobreNome}, muito prazer em conhecer vocês.`);

// exemplo na pratica

const idade = 2023 - 1989;
const nomeCompleto = nome + sobreNome;
const cidadeNacimento = "Brasília - DF"

console.log("Olá, meu nome é " + nomeCompleto + " tenho " + idade + " anos de idade e nasci em " + cidadeNacimento + "."); 
// notou como é complexo ?

// agora vamos com a templete 

console.log(`Olá, meu nome é ${nomeCompleto} tenho ${idade} anos de idade e nasci em ${cidadeNacimento}.`); 


