//Sum of Pairs
//https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript

function sumPairs(ints, s) {
  let arr = [];
  let sum = 0;
  for (let i = 0; i < ints.length; i++) {
    for (let k = i; k < ints.length; k++) {
      sum = ints[i] + ints[k + 1];
      if (sum === s) arr.push([ints[i], ints[k + 1]]);
    }
  }
  ints = ints.reverse();
  return arr.sort((a, b) => ints.indexOf(b[1]) - ints.indexOf(a[1]))[0];
}

console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));

//Best Solutions

function sum_pairs(ints, s) {
  let seen = new Set();
  for (let i of ints) {
    if (seen.has(s - i)) return [s - i, i];
    seen.add(i);
  }
}

var sum_pairs = function (ints, s) {
  var seen = {};
  for (var i = 0; i < ints.length; ++i) {
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
    seen[ints[i]] = true;
  }
};