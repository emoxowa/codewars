//Sum of all arguments
//https://www.codewars.com/kata/540c33513b6532cd58000259/train/javascript

function sum(...arg) {
  return arg.reduce((sum, current) => sum +current, 0);
}

console.log(sum(12, 1, 1, 1, 1, 1, 1));

//Best Solutions

function sum() {
  var total = 0;
  for (var i in arguments) {
    total += arguments[i];
  }
  return total;
}