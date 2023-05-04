var select = document.querySelector('select');
var html = document.querySelector('.output');

select.onchange = function() {
  var choice = select.value;

  switch(choice) {
    case 'black':
      update('black','white');
      break;
    case 'white':
      update('white','black');
      break;
    case 'purple':
      update('purple','white');
      break;
    case 'yellow':
      update('yellow','darkgray');
      break;
    case 'psychedelic':
      update('lime','purple');
      break;
  }
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}



// codigo

// var html = document.querySelector('.output');

// document.querySelector('.output select').addEventListener('change', trocaCor);  

// function trocaCor(event) {
//     var select = event.target;
//     var choice = select.value;

//     switch(choice) {
//         case 'black':
//             update('black','white');
//         break;
//         case 'white':
//             update('white','black');
//         break;
//         case 'purple':
//             update('purple','white');
//         break;
//         case 'yellow':
//             update('yellow','darkgray');
//         break;
//         case 'psychedelic':
//             update('lime','purple');
//         break;
//     }
// }
// function update(bgColor, textColor) {
//     html.style.backgroundColor = bgColor;
//     html.style.color = textColor;
// }