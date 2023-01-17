function calculo() {
    
       var operador = document.getElementById('oper')
       var num01 = document.getElementById('pnum')
       var num02 = document.getElementById('snum')
       window.alert(operador)
       window.alert(num01)
       window.alert(num02)
       if (operador == 'somar' || operador == '+' ) {
           num01 = window.prompt('escolha o primeiro numero:')
           num02 = window.prompt('escolha o segundo numero:')
           let res = parseFloat(num01) + parseFloat(num02)
           alert(`A soma de ${num01} e ${num02} é ${res}.`)            
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
