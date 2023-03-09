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


/*var botaoAdicionar = document.querySelector(".botao");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    console.loge("oi eu sou o botão e foi clicado");
});*/

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pasienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = "0";

    pasienteTr.appendChild(nomeTd);
    pasienteTr.appendChild(pesoTd);
    pasienteTr.appendChild(alturaTd);
    pasienteTr.appendChild(gorduraTd);
    pasienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pasienteTr);

    imcTd.classList.add("info-imc");
});









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