//  mais sobre tipos Booleanos 

const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy 
/* 0 e 1 as vezes pode fazer o papel dos boolenas
0 => false
1 => true
*/

console.log(0 == false);
console.log(1 == true);
console.log(1 == false);
console.log(0 == true);

/*o java script tambem entende aspas vazias como false */
console.log("" == false);
console.log("" == true);
console.log('' == false);
console.log('' == true);
console.log(`` == false);
console.log(`` == true);


/*mais um pouico sobre null e undefined */

let variavel;
let varNull = null;
console.log(variavel);// variavel undefined
console.log(varNull);// variavel null mas tem que ser declarada

// mais exemplos

let testando = 0*0;
let testando1 = 'Alura';
let testando2 = true;
let testando3 = false;
let testando4;
let testando5 = null;

console.log(typeof testando);
console.log(typeof testando1);
console.log(typeof testando2);
console.log(typeof testando3);
console.log(typeof testando4);
console.log(typeof testando5);