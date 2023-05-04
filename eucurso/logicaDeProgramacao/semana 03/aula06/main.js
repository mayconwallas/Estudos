let n1;
let n2;
let trueOrFalse = true;
while (true) {
    alert('Para sair informe ambos os numeros como 0(zero)')
    n1 = parseInt(prompt('Informe um numero: '));
    n2 = parseInt(prompt('Informe outro numero: '))
    if (n1 == 0 && n2 == 0) {
        break;
    } 
    if(n1 > 0 || n2 > 0 ) {
        alert(`Os numeros digitados foram: ${n1} e ${n2}.`)
    }
}

alert('para retornar aperte F5');
