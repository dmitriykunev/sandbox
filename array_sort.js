// Скопировать и отсортировать массив

let arr = ["HTML", "JavaScript", "CSS"];
let arrSorted = [];

function sortArray (array) {
    let clone = array.slice(0);
    arrSorted = clone.sort();
    return arrSorted
}

sortArray(arr);

console.log(arrSorted);
console.log(arr);
