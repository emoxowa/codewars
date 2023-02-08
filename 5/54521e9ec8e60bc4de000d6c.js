//Maximum subarray sum
//https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

var maxSequence = function (arr) {
  var max = 0;
  var cur = 0;
  arr.forEach(function (i) {
    cur = Math.max(0, cur + i);
    max = Math.max(max, cur);
  });
  return max;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// cur = (0, 0 + -2) => 0
// max = (0, 0) = 0

// cur = (0, 0 + 1) => 1
// max = (0, 1) => 1

// cur = (0, 1 + -3) => 0
// max = (1, 0) => 1

// cur = (0, 0 + 4) => 4
// max = (1, 4) => 4

// cur = (0, 4 - 1) => 3
// max = (4, 3) => 4

// curr = (0, 3 + 2) => 5
// max = (4, 5) => 5

// curr = (0, 5 + 1) => 6
// max = (5, 6) => 6

// cur = (0, 6 + -5) => 1
// max = (6, 1) => 6

// cur = (0, 1+ 4) => 5
// max = (6, 5) => 6 