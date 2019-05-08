// // Array Methods

// const numbers = [1,2,3,4,5];

// // forEach
// function log(what) {
//   console.log(what)
// }

// numbers.forEach(log);

// console.log('----')

// // forEach with a function expression
// numbers.forEach(function(what){
//   console.log(what);
// });

// console.log('----')

// // Show all the arguments, explicit and implied
// numbers.forEach(function(what, i, arr) {
//   console.log(`${i}: ${what} is a part or ${arr}.`)
// })

// console.log('----')

// // MATHS!!
// const squares = [];

// function square(n) {
//   return n * n;
// }

// numbers.forEach(function(number){
//   squares.push(square(number));
// });
// console.log(squares);

// console.log('----')

// // Array.map 
// const squaresMap = numbers.map(square);
// console.log(squaresMap);

// Filtering Data
const numbers = [1,2,3,4,5,6,7,8,-9, -10];
let result = [];

// with for loop
for (let i=0; i < numbers.length; i++) {
    console.log(numbers[1])
  if (numbers[i] >= 0) {
    result.push(numbers[i]);
  }
}
console.log(result);

console.log('-----');

// reset array
result = [];

// with forEach
numbers.forEach(function(number){
  if (number >= 0) {
    result.push(number);
  }
});

// console.log(result);

console.log('-----');

// Array.filter
function isPositive(number) {
  return number > 0;
}

result = numbers.filter(isPositive);
console.log(result);