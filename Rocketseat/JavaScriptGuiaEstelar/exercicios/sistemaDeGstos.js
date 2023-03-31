familia = {
  receita:[4000, 1500],
  gastos:[1500, 1200, 300, 200, 500, 250, 100, 25]
}

const receitaSeparada  = familia.receita;
const gastosSeparado = familia.gastos;

function somarArray(arr) {
    return arr.reduce((total, valor) => total + valor, 0);
}

let receitaTotal = somarArray(receitaSeparada);
let gastoTotal = somarArray(gastosSeparado);


function comparaValores(receita, gastos) {
    return receita - gastos;
}

console.log(`Receira: ${receitaTotal}, Gastos: ${gastoTotal}`);
let saldoConta = comparaValores(receitaTotal, gastoTotal);
console.log(`Seu saldo é: ${saldoConta}`);



