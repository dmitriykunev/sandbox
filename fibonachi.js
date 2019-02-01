var number = prompt('Веедите цепочку числа Фибоначи...', 1);

var currentNumber = 0;
var previousNumber = 0;

function fib(n) {
    for (i = 1; i < number; i++) {
        currentNumber = i
        previousNumber = currentNumber - 1
        sumFib = currentNumber + previousNumber
        
                
    }
        
 return sumFib   
}

alert('Число Фибоначиб длиною ' + number + ' равна ' + fib(number));
