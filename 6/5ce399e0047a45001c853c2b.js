//Sums of Parts
//https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript

function partsSums(ls) {
  let arr = [];
  while (ls.length > 0) {
    arr.push(ls.reduce((sum, curr) => sum + curr, 0));
    ls.splice(0, 1);
  }
  arr.push(0);
  return arr;
}

function partsSums1(ls) {
  let arr = [];
  let first = ls.reduce((sum, curr) => sum + curr, 0);
  for (let i = 0; i < ls.length; i++) {
    arr.push(first);
    first = first - ls[i];
  }
  arr.push(0);
  return arr;
}

console.log(partsSums1([0, 1, 3, 6, 10]));

//Best Solutions

function partsSums(ls) {
  ls.unshift(0);
  let sum = ls.reduce((p, c) => p + c, 0);
  return ls.map((v) => (sum = sum - v));
}