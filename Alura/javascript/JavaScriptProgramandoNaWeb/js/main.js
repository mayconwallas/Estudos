var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var peso = parseInt(tdPeso.textContent);
    var altura = parseFloat(tdAltura.textContent);
    var tdImc = paciente.querySelector(".info-imc");   
    if (peso <= 0 || peso > 250 || altura < 0.3 || altura > 2.5 ) {
        paciente.classList.add("paciente-invalido");
        tdImc.textContent = "Valor invalido";
    } else {
        var imc =  peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}









/*
// meu codigo
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var peso = parseInt(tdPeso.textContent);
var altura = parseFloat(tdAltura.textContent);
var tdImc = document.querySelector(".info-imc");



if (peso <= 0 || peso > 250 || altura < 0.3 || altura > 2.5 ) {
    alert("valores para o calculo de imc invalido.");
} else {
    var imc =  peso / (altura * altura);
    tdImc.textContent = imc ;
}
// codigo do instrutor
var paciente = document.querySelector("#primeiro-paciente");

var tdAltura = paciente.querySelector(".info-altura");
var tdPeso = paciente.querySelector(".info-peso");
var tdImc = paciente.querySelector(".info-imc");


var altura = tdAltura.textContent;
var peso = tdPeso.textContent;

var alturaEhValida = true;
var pesoEhValido = true;

if (peso <= 0 || peso > 1000) {
    console.log("Peso inválido!");
    tdPeso.textContent = "Peso inválido!";
    pesoEhValido = false;

}

if (altura <= 0 || altura >= 3) {
    console.log("Altura inválida!");
    tdAltura.textContent = "Altura inválida!";
    alturaEhValida = false;
}

if (alturaEhValida && pesoEhValido) {

    var imc = peso / (altura * altura);
    tdImc.textContent = imc;    
} else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
}
*/