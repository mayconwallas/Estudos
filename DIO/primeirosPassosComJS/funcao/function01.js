/*
Código condição de pagamento
1 - À vista Débito, recebe 10% de desconto;
2 - À vista pix, recebe 15% de desconto;
3 - Em duas vezes, preço normal;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100;
const formaDePagamento = 4;
(function () {
    mostraResultado()
})();

function verificaFormaPagamento(formaDePagamento) {
    let valorFinal;
    if (formaDePagamento == 1 ){
        valorFinal = precoEtiqueta - (precoEtiqueta * 0.1);
    } else if(formaDePagamento == 2 ) {
        valorFinal = precoEtiqueta - (precoEtiqueta * 0.15); 
    } else if (formaDePagamento == 3) {
        valorFinal = precoEtiqueta;
    } else if (formaDePagamento == 4) {
        valorFinal = precoEtiqueta + (precoEtiqueta * 0.15);
    }
    return valorFinal;
}

function mostraResultado() {
    let valorfinal = verificaFormaPagamento(formaDePagamento)
    console.log(`pela forma escolhida o valor fica ${valorfinal}`)
};