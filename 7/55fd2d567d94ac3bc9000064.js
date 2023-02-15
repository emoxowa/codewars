//Sum of odd numbers
//https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javas

function rowSumOddNumbers(n) {
  let start = n ** 2 - n + 1;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += start;
    start += 2;
  }
  return sum;
}

console.log(rowSumOddNumbers(5));

//Best Solutions

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}