// tipos String

const sapequinha = "sapeca";
const texto = "Olá, Mundo! JavaScript";
const texto2 = 'Olá, Mundo! JavaScript seu danadinho';
const texto3 = `Olá, Mundo! JavaScript seu ${sapequinha}`;
console.log(sapequinha);
console.log(texto);
console.log(texto2);
console.log(texto3);

// tambem pode receber senhas

const senha = "Cavalo123@";
console.log(senha);

// tambem é sting
const stringNumero = "123456";
console.log(stringNumero);

// para citação pode usar aspas simplis primeiro e dentro aspas duplas

const citacao = 'uma citacao do curso da Alura "sera que da certo?"';
console.log(citacao);

const citacao2 = "uma citacao do curso da Alura 'também funciona ao contrario.'";
console.log(citacao2);

// template string OU template literal
/* usando o acento grave como aspas vc pode formatar o textos e as variaveis atingindo resultados magicos :) */

const texto4 = `aqui posso colocar praticamente todas minhas variaveis "${texto}, ${texto2}" e eles vao aparecer como realmente foram quardados.`;
console.log(texto4);

// muito importante lembrar que o "+" pode "somar" textos
// ou seja vai contatenar duas strings

const primeiroNome = "Maycon Wallas";
const ultimoNome = ' Balbino da Silva';

console.log(primeiroNome + ultimoNome);

const magica = "Isso é ";
const pura = 'magico e lindo.';

console.log(magica + pura);


/*mais "strings"-- Os caracteres \u no início do código são caracteres de escape que usamos para sinalizar ao JavaScript de que estamos falando de códigos Unicode, e não de strings de texto usuais.  */

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);

// aprofundando um pouco as strings e mais exemplos

const cidade = "belo horizonte";
const input = "Belo Horizonte";
console.log(cidade === input); // false

//const cidade = "belo horizonte";
//const input = "Belo Horizonte";
const inputMinusculo = input.toLowerCase();// aqui joga os dois para minusculo
console.log(cidade === inputMinusculo); // true


//quantas caracteres tem ?

const novaSenha = "minhaSenha123"
console.log(novaSenha.length) // 13 caracteres
