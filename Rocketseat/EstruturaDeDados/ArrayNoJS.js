const num = [10, 7, 40, 32, 350];
const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton'];

console.log(pilotos[0]);
console.log(pilotos[3]);

console.log(pilotos.length);

for (let piloto of pilotos) {
    console.log(piloto);
}

pilotos.push('Alonso');
for (let piloto of pilotos) {
    console.log(piloto);
}


const senna = pilotos.find(piloto => piloto ==='Senna')
console.log(senna);


pilotos.splice(1, 1);
console.log(pilotos);