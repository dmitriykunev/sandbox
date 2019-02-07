let obj = {
    className: 'open menu'
};

let target = obj.className.split(' ');
let preliminary = [];

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

function removeClass (obj, cls) {
    for (i = 0; i < target.length; i += 1) {
       if (isProp(cls)) {
       preliminary    
    }
    }
    
}


removeClass(obj, 'open');
removeClass(obj, 'blabla');
