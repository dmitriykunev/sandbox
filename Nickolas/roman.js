//if (2*4 == 7){
//console.log ("верно!")
//} else {
 //   console.log("неверно!")
//}
let num = 50;

if (num < 49) {
   console.log ("неверно!")
} else if (num > 100) {
   console.log ("многовато!")
} else {
   console.log ("верно!")
}


(num == 50) ? console.log ("верно!") : console.log ("неверно!");

switch(num) {
    case num > 49:
          console.log("неверно!");
          break;
    case num <100:
         console.log("многовато");
         break;
    case num < 80:
        console.log("Всеравно многовато!");
        break;
    case 50:
        console.log('Верно!');
        break;
    default:
        console.log('что то пошло не так!');
        break;

}