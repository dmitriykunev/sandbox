// Удаление класса

let obj = {
    className: 'open menu'
};

let target = obj.className.split(' ');
let preliminary = [];

function removeClass (obj, cls) {
    for (i = 0; i < target.length; i += 1) {
       if (target[i] == cls) {
       preliminary = target.splice(i, 1)
    }
    }
   return preliminary 
}


// removeClass(obj, 'open');
removeClass(obj, 'blabla');
console.log(target);
