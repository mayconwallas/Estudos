console.log("Trabalhando com condicionais");

//declarando array

const listaDeDestinos = new Array(
    "Belo Horizonte",
    "Brasília",
    "Goiania",
    "Rio de Janeiro",
    "São Paulo",
    "Salvador"
);
const idadeComprador = 18;
const acompanhada = false;

/*if (idadeComprador >= 18) { 
    console.log("destinos possíveis:");
    listaDeDestinos.splice(4,1);
    console.log(listaDeDestinos);
    console.log("obrigado por confirmar a compra.");
} else if (acompanhada){
        console.log("destinos possíveis:");
        listaDeDestinos.splice(4,1);
        console.log(listaDeDestinos);
        console.log("esta acompanhada.");
        console.log("obrigado por confirmar a compra.");
    }else{
        console.log("destinos possíveis:");
        console.log(listaDeDestinos);
        console.log("para efetuar a compra você precisar ser maior de idade ou estar acompanhando de um responsavel.");
    }*/
    
    if (idadeComprador >= 18 || acompanhada) { 
        console.log("destinos possíveis:");
        listaDeDestinos.splice(4,1);
        console.log(listaDeDestinos);
        console.log("obrigado por confirmar a compra.");
    } else{
            console.log("destinos possíveis:");
            console.log(listaDeDestinos);
            console.log("para efetuar a compra você precisar ser maior de idade ou estar acompanhando de um responsavel.");
        }  
