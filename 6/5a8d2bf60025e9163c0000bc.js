//Simple frequency sort
//https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc

function solve(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] ? +obj[arr[i]] + 1 : 1;
  }
  return [...arr].sort((a, b) => obj[b] - obj[a] || a - b);
}

console.log(
  solve([
    24, 24, 24, 0, 0, 5, 5, 21, 21, 23, 23, 33, 33, 42, 42, 45, 45, 49, 49, 1,
    2, 4, 6, 7, 9, 11, 15, 19, 20, 29, 30, 32, 40, 41, 43,
  ])
);
