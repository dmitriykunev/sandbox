// Сортировать в обратном порядке

let arr = [5, 2, 1, -10, 8];
let result = [];

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}

function reverseSort (arr) {
    result = arr.sort(compareNumeric);
    result = result.reverse()
    return result
}

reverseSort(arr);

console.log(result); //8, 5, 2, 1, -10
