console.log("Trabalhando com atribuição de variáveis");

const idade = 29; // variavel numero
let nome = "Maycon"; //variavel texto ou string.
const sobrenome = "wallas";

console.log(nome + sobrenome);

//para colocar espaço pode ser feito de algumas formar 
console.log(nome, sobrenome);// com uma virgula
console.log(nome + " " + sobrenome);// concatenando um espaço
/*ou já coloca na variavel com espaço mas isso pode dar problema dependendo do que vc for fazer com a variavel*/

// no js podemos usar `` para fazer essa concatenação direto.
console.log(`Meu nome é ${nome} ${sobrenome}.`);

//sobrescrevendo variaveis
//se for uma constant vai dar erro
//nome = nome + sobrenome;
//console.log(nome);

//const não muda
//let pode mudar.
/*uma boa pratica é não mudar o Tipo da variavel, pode mudar o valor mas não o tipo*/


const nomeCompleto = nome + sobrenome;
console.log(nomeCompleto);


//variavel contadora.
let contador = 0;
contador = contador + 1;
console.log(contador);
// ou abaixo mesmo resultato.
let contador1 = 0;
contador1++;
console.log(contador1);

// é uma boa pratica usar mais constantes "const" do que let ou var.

// para nomer seja o mais específico possivel.


// criando variaveis
let idadeNova;// declarando a variavel
idadeNova = 33; // atribuindo valor
idadeNova = idadeNova + 1;
console.log(idadeNova);