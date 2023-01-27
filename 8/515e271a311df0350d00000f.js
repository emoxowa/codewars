//Square(n) Sum
//https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

function squareSum(numbers) {
  return numbers.reduce((sum, curr) => sum + curr*curr, 0);
}

console.log(squareSum([1, 2]));