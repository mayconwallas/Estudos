function calculo() {

        //alert('vamos usar a calculadora.')
        /* let operador = window.prompt('Digite a operação deseja realizar:'+'\n'+'somar'+'\n'+'subtrair'+'\n'+'dividir'+'\n'+'multiplicar') */
       // num01 = window.prompt('escolha o primeiro numero:')
       // num02 = window.prompt('escolha o segundo numero:')

    
       let select = document.querySelector('#operador');
       let operador = select.options[select.selectedIndex].value;
       let num01 = document.querySelector('#pnum')
       let num02 = document.querySelector('#snum')
       

        if (operador == 'somar' || operador == '+' ) {
            let res = parseFloat(num01) + parseFloat(num02)
            alert(`${text}A soma de ${num01} e ${num02} é ${res}.`)            
        } else if (operador == 'subtrair' || operador == '-'  ) {
            num01 = window.prompt('escolha o primeiro numero:')
            num02 = window.prompt('escolha o segundo numero:')
            let res = num01 - num02
            alert(`A subtração de ${num01} e ${num02} é ${res}.`)
        } else if (operador == 'dividir' || operador == '/'  ) {
            num01 = window.prompt('escolha o primeiro numero:')
            num02 = window.prompt('escolha o segundo numero:')
            let res = num01 / num02
            alert(`A divisão de ${num01} e ${num02} é ${res}.`)
        } else if (operador == 'multiplicar' || operador == '*'  ) {
            num01 = window.prompt('escolha o primeiro numero:')
            num02 = window.prompt('escolha o segundo numero:')
            let res = num01 * num02
            alert(`A multiplicação de ${num01} e ${num02} é ${res}.`)
        } else {
            alert('escolha o operador correto.')
        } 


    }  
