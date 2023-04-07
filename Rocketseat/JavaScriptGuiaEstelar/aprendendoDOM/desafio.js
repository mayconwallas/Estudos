const button = document.getElementById("openModal");
const teste = document.querySelector(".modal-wrapper")


button.addEventListener("click", abrirModal);
document.addEventListener("keyup", fechandoModal);

function abrirModal() {
    teste.classList.remove("invisible");
}

function fechandoModal(event) {
    const isEscKey = event.key === "Escape";
    if(isEscKey) {
        teste.classList.add("invisible");
    }
}

