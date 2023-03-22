let caixa = document.querySelector(".caixateste");
switch (teste = new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  caixa.innerHTML = `<p>${day}</p>`; 

const frutas = ["banan", "maçã", "uva", "pitaia", "tomate"];
  function qualfruta () {
    for (let i = 0; i < frutas.length; i++) {
        caixa.innerHTML += `<p>${frutas[i]}</p>`;
    }
  }
  console.log(qualfruta());