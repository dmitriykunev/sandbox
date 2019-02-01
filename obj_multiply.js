var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

function multiplyNumeric(a) {
    for (let key in a) {
        if (isNumeric(a[key])) {
            a[key] *= 2 
        }
    }    
    
};

multiplyNumeric(menu)

console.log (menu.width);
