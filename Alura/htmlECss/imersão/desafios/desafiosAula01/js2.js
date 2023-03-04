var nome = window.prompt('Olá.\nQual seu nome? ')
var anoLuz = parseFloat(window.prompt(`${nome} qual distancia em anos luz você quer converter para metros? `));
anoLuz = anoLuz.toFixed(3)
var metros = anoLuz / 0.00000000000000010570
metros = metros.toFixed(2)
distSirius = 8.611 / 0.00000000000000010570
distSirius = distSirius.toFixed(2)
var valorMoeda = window.alert(`${nome} convertendo ${anoLuz} ano luz em metros teremos ${metros}.\nLevando em consideração que a estrela Sirius esta a 8.611 anos luz da terra, logo a distancia em metros equivale a ${distSirius}. `);
