function troco() {
    let produto = window.prompt('Qual produto você comprou?')
    let vproduto = window.prompt('Qual o valor do produto?')
    let vdinheiro = window.prompt('Quanto você deu em dinheiro?')
    var troco = vdinheiro - vproduto

    window.alert(`Você comprou ${produto} que custa R$ ${vproduto} e pagou R$ ${vdinheiro} em dinheiro e vai ficar com  R$ ${troco} de troco. Volte sempre!`)
}