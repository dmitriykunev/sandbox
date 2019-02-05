//Добавить класс в строку

let obj = {
    className: 'open menu'
};
let target = obj.className.split(' ');

function isProp(prop) {
    if (target.includes(prop)) {
        return true
        } return false;
};

function addClass(obj, cls) {
    if (isProp(cls)) {
      return obj.className  
    } return obj.className = obj.className + ' ' + cls
};


addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');

alert (obj.className);
