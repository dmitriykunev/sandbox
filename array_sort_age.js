// Отсортировать массив по полю Age
// не завершено

let vasya = {name: 'Вася', age: 23};
let masha = {name: 'Маша', age: 18};
let vovochka = {name: 'Вовочка', age: 6};

let people = [vasya, masha, vasya];

//Новый код здесь

function parse (array) {
    let result = array.reduce(function(prev, next) {
        return prev > next
    };
    return result
    console.log(result);
}

sortArray(people);
