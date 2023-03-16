// Operadores  ternário

const idadeMinima = 18;
const idadeCliente = 16;

//comparação padrao 
if (idadeCliente >= idadeMinima) {
    console.log("cerveja");    
} else {
    console.log("Suco");
}



//comparação com operador ternario
            //condição                     //true     //false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco");