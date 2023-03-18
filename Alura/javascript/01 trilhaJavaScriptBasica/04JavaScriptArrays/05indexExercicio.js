const arrayNums = [1, 2, 3, 4]

arrayNums.forEach((num) => {
  num *= 10
  console.log(num);
});


// outro resultado possivel com map
// no array

function multiplicaPorDez(num) {
  return num * 10
 }

 const arraySomada = arrayNums.map(multiplicaPorDez)

console.log(arraySomada)