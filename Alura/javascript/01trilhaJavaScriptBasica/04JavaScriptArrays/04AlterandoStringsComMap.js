const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const listaNova = nomes.map((nome) => {
  return nome.toUpperCase();  
});
console.log(listaNova);

//outra forma de escrever o mesmo codigo 
const listaNova1 = nomes.map((nome) => nome.toUpperCase());
console.log(listaNova1) // mesmo resultado
// isso acontece pois a arrow function permite.