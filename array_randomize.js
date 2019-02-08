// Случайный порядок в массиве

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrRandom = [];

function randomizer(array) {
    for (i = 0; i < array.length; i++) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
//         const next = arr.slice(randomIndex, 1)
        arrRandom.push(arr[randomIndex])
        const next = arr.splice(randomIndex, 1)
    }
    console.log(arrRandom)
    return arrRandom
}

randomizer(arr);

alert(arrRandom);
