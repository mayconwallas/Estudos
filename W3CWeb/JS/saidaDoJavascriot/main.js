// //tipos de saidas
// // Escrevendo em um elemento HTML, usando innerHTML.
// // Escrevendo na saída HTML usando document.write().
// // Escrevendo em uma caixa de alerta, usando window.alert().
// // Escrevendo no console do navegador, usando console.log().
// var controle = document.getElementById("demo");

//     // Escrevendo em um elemento HTML, usando innerHTML.
//     controle.innerHTML = "Meu primeiro JavaScript";
//     // Escrevendo na saída HTML usando document.write().
//     //documento.write() só deve ser usado para teste.
//     controle = document.write(`<p>novas informação</p>`);

//     // Escrevendo em uma caixa de alerta, usando window.alert().
//     // window.alert("esse é um alerta chato")

//     // Escrevendo no console do navegador, usando console.log().
//     console.log("esse é mais usado para os programadores.")

//     // innerHTML com numeros
//     document.getElementById("demo").innerHTML += `${controle} também posso usar para escrever somas => ${(5 + 6)}`;

//     function minhaFuncaoRetorna() {
//         document.getElementById("demo").innerHTML = "Voltei ao controle";
//     }


//     function minhaFuncao() {
//         document.getElementById("demo").innerHTML = "Parágrafo alterado sua tag p foi invadida";
//     }

//     //para entender concatenação
//     let x = 2 + 3 + "5";
//     console.log(x);
//     let y = "5" + 2 + 3;
//     console.log(y);
//     let w = 2 - 3 - "5";
//     console.log(w);
//     let z = "5" / 2 / 3;
//     console.log(z);


//     // crifrão e underline
//     let $ = "Hello World";
//     let $$$ = 2;
//     let $myMoney = 5;
//     console.log($);
//     console.log($$$);
//     console.log($myMoney);

//     let _lastName = "Johnson";
//     let _x = 2;
//     let _100 = 5
//     console.log(_lastName);
//     console.log(_x);
//     console.log(_100);

//     //estudando const
//     const meuArray = ["chubaquinha", "chupetinha", "chururu"];
//     console.log(meuArray);
//     meuArray[2] = "chapetinha";
//     console.log(meuArray);
//     meuArray.push("chururu");
//     console.log(meuArray); 


    //let xNovo = -100;
    //xNovo <<= 5;
    //xNovo >>= 5;
    //xNovo >>>= 5;
    //xNovo &= 5;
    //xNovo |= 5;
    //xNovo ^= 5;
    //console.log(xNovo);


    // var tipo1 = 1;
    // var tipo2 = "1";
    // var tipo3 = true;
    // var tipo4 = false;
    // var tipo5 = [1,2,3,4,5,6,7,8,9];
    // var tipo7 = {
    //     nome: "Maycon",
    //     idade: 33,
    //     peso: 114.99,
    //     altura: 1.81,
    //     focado: true,
    //     desiste: false,
    // };
    // var tipo8 = ["banana", "maçã", "manga", "uva"];
    // var tipo9 = null;
    // var tipo10 = undefined;
    // var tipo11 = 1 + "soma"; 

    // console.log(typeof tipo1);
    // console.log(typeof tipo2);
    // console.log(typeof tipo3);
    // console.log(typeof tipo4);
    // console.log(typeof tipo5);
    // console.log(typeof tipo7);
    // console.log(typeof tipo8);
    // console.log(typeof tipo9);
    // console.log(typeof tipo10);
    // console.log(typeof tipo11);

const minhaAltura = 1.81;
const meuPeso = 95;

function calculoDeImc(altura, peso) {
    return peso / (altura * 2);
}

console.log(calculoDeImc(minhaAltura, meuPeso));

console.log(114-92);

// function toCelsius(fahrenheit) {
//     return (5/9) * (fahrenheit-32);
//   }
//   document.getElementById("demo").innerHTML = toCelsius;

  function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  document.getElementById("demo").innerHTML = toCelsius(1);