const buttonHtoria = document.querySelector('.randomize');
const resposta = document.querySelector('.story');

function raondomValueFromArray() {
    const arrHistorias = [
            'It was 94 fahrenheit outside, so Big Daddy went for a walk. When they got to Disneyland, they stared in horror for a few moments, then turned into a slug and crawled away. Bob saw the whole thing, but was not surprised — Big Daddy weighs 300 pounds, and it was a hot day.',
            ' It was 94 fahrenheit outside, so Father Christmas went for a walk. When they got to the soup kitchen, they stared in horror for a few moments, then turned into a slug and crawled away. Bob saw the whole thing, but was not surprised — Father Christmas weighs 300 pounds, and it was a hot day.',
            'It was 34 centigrade outside, so Big Daddy went for a walk. When they got to the soup kitchen, they stared in horror for a few moments, then turned into a slug and crawled away. Bob saw the whole thing, but was not surprised — Big Daddy weighs 21 stone, and it was a hot day.',
            'It was 34 centigrade outside, so Big Daddy went for a walk. When they got to the White House, they stared in horror for a few moments, then melted into a puddle on the sidewalk. Bob saw the whole thing, but was not surprised — Big Daddy weighs 21 stone, and it was a hot day.'
    ];
    let randomNumber = Math.floor(Math.random() * arrHistorias.length);
    const historia = arrHistorias[randomNumber];
    return resposta.innerHTML = historia;
}


buttonHtoria.addEventListener('click', raondomValueFromArray);

