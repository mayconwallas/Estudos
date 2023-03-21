// Operadores 

/*
== (comparação implicita)

*/

const numero = 5;
const numeroString = "5";

console.log(numero == numeroString);// da true pois o java entende que sao o mesmo numero


/*
=== (comparação explícita)

*/

console.log(numero === numeroString);// vai dar false pois elas tem tipos diferentes

// typeof
console.log( typeof numero); //fala que é numero
console.log(typeof numeroString);// fala que é string

/*
ou seja 
== só compara o valor da variavel
=== compara o valor e o tipo de dados da variavel


Obs: as boas praticas hoje é usar apenas os === e caso venha a ser necessario converter o tipo para chegar ao resultado.
deve converter de forma explicita
*/

//conversores explicitos

Number()
String()