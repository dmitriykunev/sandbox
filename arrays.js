// Фильтр диапозона
/*
let range = [];

function filterRange(arr, a, b) {
    for (i = 0; i < arr.length; i++) {
        if (a <= arr[i] && arr[i] <= b) {
           range.push(arr[i]);
        }
    } return range;
}

var arr = [5, 4, 3, 8, 0, 1, 12, 2];

var filtered = filterRange(arr, 3, 9);*/


// Поиск в массиве

// arr = ['test', 2, 1.5, false];
// 
// function find(array, val) {
//     for (i = 0; i < array.length; i++) {
//         if (val == array[i]) {
//             alert(i); break;
//         } 
//         if (i == (array.length - 1)) {
//             alert(-1);
//         }
//     } 
// }
// 
// find(arr, '2');
// 
// Создайте калькулятор для введенных чисел
/*
let array = [];
let sum = 0;

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

do {
    result = prompt('Введите число для расчета', undefined);
    array.push(result)
}
while (isNumeric(result));

for (i = 0; i < array.length; i++) {
   sum += +array[i]; 
}
alert('Сумма числа равна ' + sum);*/


// Показать последний элемент массива

// var myArray = ['Andrew', 'John', 'Samantha', 'Chase'];
// 
// let lastArrayElem = myArray[myArray.length - 1];
// 
// console.log(lastArrayElem);


// Добавление нового элемента в массив

// var myArray = ['Andrew', 'John', 'Samantha', 'Chase'];
// myArray.push('Tom');
// 
// console.log(myArray[myArray.length - 1])


// Операции над массивом [creation,removal, substitution of elements]

// var styles = ['Jazz', 'Blues'];
// 
// styles.push('Rock-n-Roll');
// 
// styles[styles.length - 2] = ('Classical');
// 
// var firstArrayelement = styles.shift(); 
// 
// styles.unshift('Rap', 'Raggy');
// console.log(styles);

// Показать случайный элемент массива

// var arr = ['Яблоко', 'Апельсин', 'Груша', 'Лимон'];
// 
// var min = 0;
// var max = (arr.length - 1);
// 
// var rand = min + Math.floor(Math.random() * (max + 1 - min));
// 
// alert(arr[rand]);

