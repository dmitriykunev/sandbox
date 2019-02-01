// for (var i = 0; i < 11; i++) {
//   if (i % 2 == 0) { console.log(i)};
// }
// var i = 0;
//
// // while (i < 11) {
// //   if (i % 2 == 0) {console.log(i)
// //   };
// //   i++
// // }


for (var i = 0; i <= 10; i++) {
  if(i === 2) {
    console.log(i)
  } else {
  const sqrt = Math.sqrt(i);
  for (let j = 3; j <= sqrt; j += 2) {
  if (i % j === 0) {
  console.log(i)
}
}
}
}
