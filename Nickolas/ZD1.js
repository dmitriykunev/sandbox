'use strikt';
let money = prompt('Ваш бюджет на месяц?', '');
console.log (money);

    time = prompt('Введите дату в формате YYYY-MM-DD', '');
console.log (time);

let oneQuestions = prompt("Введите обязательную статью расходов в этом месяце", ""),
    twoQuestions = prompt("Во сколько обойдется?", ""),
    threeQuestions = prompt("Введите обязательную статью расходов в этом месяце", ""),
    fourQuestions = prompt("Во сколько обойдется?", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        oneQuestions: threeQuestions,
        twoQuestions: fourQuestions
    },
    optionalExpeses: {},
    income: [],
    savings: false
    

}

console.log(appData.expenses.oneQuestions);  // проверка в консоле записываются ли данные пользователя в обьект при вводе
console.log(appData.expenses.twoQuestions);
alert(appData.budget / 30);