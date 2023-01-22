//Bit Counting
//https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

var countBits = function (n) {
  let arr = n.toString(2).match(/1/g) || [];
  return arr.length;
};

console.log(countBits(0));

//Best Solutions

var countBits = function (n) {
  return n.toString(2).replace(/0/g, "").length;
};