var nome = window.prompt('Qual seu nome? ')
var moedaConv = parseInt(window.prompt(`Olá ${nome} Digite o numero referente a moeda que você gostaria de converter?\n[1] - Euro \n [2] - Dólar dos Estados Unidos \n [3] - Dólar canadiano \n [4] - Iene japonês \n [5] - Bitcoin \n [6] - Ether \n`));
var moeda = ''
if(moedaConv < 1 || moedaConv >6){
    window.alert("[ERRO] Moeda invalida \n Informe o numero correspondente a moeda desejada!")
} else {
    switch (moedaConv) {
        case 1:
            moeda = "Euro";
            valorAtual = 5.55 ;
            break;
        case 2:
            moeda = "Dólar dos Estados Unidos";
            valorAtual = 5.10   ;
            break;
        case 3:
            moeda = 'Dólar canadiano';
            valorAtual = 3.82 ;
            break;
        case 4:
            moeda = 'Iene japonês';
            valorAtual = 0.039 ;
            break;
        case 5:
            moeda = 'Bitcoin';
            valorAtual = 117852.25 ;
            break;
        case 6:
            moeda = 'Ether';
            valorAtual = 8056.96 ;
            break;
        default:
            break;
    }
}
var valorMoeda = window.prompt(`${nome} você escolheu ${moeda}.\n Qual valor de ${moeda} Você gostaria de converter para Real?`);

real = valorMoeda * valorAtual
real = real.toFixed(2)

window.alert(`${nome} a moeda ${moeda} atualmente vale ${valorAtual} x ${valorMoeda} temos: ${real}.`)