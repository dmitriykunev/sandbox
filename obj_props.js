"use strict";

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250,
    "Ираклий": 750,
    "Жопа": 1200
};

var min = 0;
var max = 0;
var exact = 0;


    for (var key in salaries) {
        
        if (max > salaries[key]) {
            continue
        } 
        max = salaries[key]
        exact = key
    }      


console.log('Самый богатый работник' + ' ' + exact + ' ' + salaries[exact]);
