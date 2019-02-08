// Фильтрация массива на месте

arr = [5, 3, 8, 1, 2, 4, 6, 7, 9];
let result = [];

function filterRangeInPlace (array, min, max) {
    result = array.filter(function(el, i, array) {
        return (el >= min && el <= max)
    })
    return result
}


filterRangeInPlace(arr, 1, 5);
alert(result);
