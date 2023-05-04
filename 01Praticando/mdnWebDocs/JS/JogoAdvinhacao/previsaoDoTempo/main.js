let selects = document.querySelector('#weather');
let para = document.querySelector('p');

let select = document.querySelector('select');
let html = document.querySelector('html');
document.body.style.padding = '10px';

// function setWeather() {
//   var choice = select.value;

//   if (choice === 'sunny') {
//     para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
//   } else if (choice === 'rainy') {
//     para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
//   } else if (choice === 'snowing') {
//     para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
//   } else if (choice === 'overcast') {
//     para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
//   } else {
//     para.textContent = '';
//   }
// }

// ou com switch

selects.addEventListener('change', setWeather);
select.addEventListener('change', blackOrWhite);


function setWeather() {
  var choice = selects.value;

  switch (choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }
}


function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

function blackOrWhite() {
  ( select.value === 'black' ) ? update('black','white') : update('white','black');
}


