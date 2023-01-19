//You're a square!
//https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

var isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n))
};

console.log(isSquare(-1));

