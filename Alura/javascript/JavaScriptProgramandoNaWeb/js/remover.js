var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");

    tabela.addEventListener("dblclick", function(event) {
        var alvoEvento = event.target;
        var paiDoAlvo = alvoEvento.parentNode;
        var podeRemover = prompt("Tem certeza que desenha remover? [S / N]");
        if (podeRemover == "S" || podeRemover == "s"){
            event.target.parentNode.classList.add("fideOut");
            setTimeout(function(){
                paiDoAlvo.remove();
            }, 450);
        }
    });





/*pacientes.forEach(function (paciente) {
    paciente.addEventListener("dblclick", function() {
        var podeRemover = prompt("Tem certeza que desenha remover? [S / N]");
        if (podeRemover == "S" || podeRemover == "s"){
            this.remove();
        }
    });
});*/