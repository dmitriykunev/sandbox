// Кэмелкейс написание

function rest(word) {
    const [first, ... rest] = word.split('')
    return rest.join ('')
    
}

function capitalize(char) {
    let result = '';
    result = char.toUpperCase()
    return result
}

function camelize(str) {
    let arrayCopy = separate(str);
    let index = 0;
    if (arrayCopy == "") {index += 1}
    let camelCase = arrayCopy[index];
    for (i = 1; i < (arrayCopy.length); i += 1) {
    camelCase += capitalize(arrayCopy[i].charAt(0)) + rest(arrayCopy[i])
    
    } return camelCase
} 

function separate(phrase) {
    let array = phrase.split('-')
    return array
}


// const camelCase = camelize("background-color");
const camelCase = camelize("list-style-image");
// const camelCase = camelize("-webkit-transition");

console.log(camelCase);
