(function () {
    escreveNome("Maycon");
    verificaIdade(-1);
    verificaIdade(10);
    verificaIdade(18);
    verificaIdade(125);
    verificaIdade(130);
})();

function escreveNome(nome) {
    return nome;
}

function verificaIdade(idade) {
    if (idade > 0 && idade < 18) {
        console.log(
          `${escreveNome("Wallas")} sua idade é ${idade} logo você é menor de idade.`
        )
    } else if (idade >= 18 && idade < 125) {
        console.log(
          `${escreveNome("Wallas")} sua idade é ${idade} logo você é maior de idade.`
        )
    } else {
        console.log(`A idade ${idade} não é uma idade valida.`);
    }
}

