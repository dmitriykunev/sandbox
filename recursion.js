
var number = prompt('Введите число для вычисления факториала...', 1);

let n = Number.parseInt(number);

function factorial(n) {
    for (i = 1; i < number; i++) {
        n = n * (number - i);
    } return n
}


alert('Факториал числа ' + number + 'равняется ' + factorial(n));

// var a = prompt('Введите первое число...', 0);
// var b = prompt('Введите второе число...', 0);
// 
// let min = Number.parseInt(a)
// let max = Number.parseInt(b)
// 
// const trampoline = (fn) => (...args) => {
//     let result = fn(...args)
//     while(typeof result === 'function'){
//         result = result()
//     }
//     
//     return result
// }
// 
// 
// function sumTo (min, max, sum = 0) {
//     return min === max ? min + sum : () => sumTo(min + 1, max, sum + min)
//     
// }
// 
// const superSum = trampoline(sumTo)
// 
// alert('Сумма равна ' + superSum(min, max));


// function sumTo (a, b) {
//     let start = Number.parseInt(a)
//     const end = Number.parseInt(b)
//     for (i = 0; i < end; i++) {
//         sum += start
//         start++
//     }
// 
// }
// 
// 
// sumTo(a, b);
// alert('Сумма равна ' + sum);
