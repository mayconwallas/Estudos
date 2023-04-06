let horaFooter = document.querySelector(".horaFooter");
const horas = new Date();

if (horas >= "5" && horas <= "11") {
    horaFooter.innerHTML = `Bom Dia!`;
    horaFooter.innerHTML += ` Agoração ${horas.getHours()}:${horas.getMinutes()}`;
} else if (horas >= "12" && horas <= "17") {
    horaFooter.innerHTML = `Boa tarde!`;
    horaFooter.innerHTML += ` Agoração ${horas.getHours()}:${horas.getMinutes()}`;
} else {
    horaFooter.innerHTML = `Boa noite!`;
    horaFooter.innerHTML += ` Agoração ${horas.getHours()}:${horas.getMinutes()}`;
}
