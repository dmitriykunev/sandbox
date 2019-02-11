// Случайный порядок в массиве

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arrRandom = [];
// 
// function randomizer(array) {
//   const length = array.length
//     for (let i = 0; i <= length; i++) {
//     let randomIndex = Math.floor(Math.random() * array.length);
//     arrRandom.push(array.splice(randomIndex, 1))
//  }
// 
//     return arrRandom
// }
// 
// randomizer(arr);
// 
// alert(arrRandom);



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrRandom = [];

function randomizer(array) {
while(array.length) {
    let randomIndex = Math.floor(Math.random() * array.length);
    arrRandom.push(array.splice(randomIndex, 1))
 }

    return arrRandom
}

randomizer(arr);

alert(arrRandom);
