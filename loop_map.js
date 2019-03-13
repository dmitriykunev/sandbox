const arr = ["Есть", "жизнь", "на", "Марсе"];

let arrLength = arr.map(function(name) {
  return name.length;
});

// let arrLength = [];
//
// for (let i = 0; i < arr.length; i++) {
//   arrLength[i] = arr[i].length;
// }

alert(arrLength);
