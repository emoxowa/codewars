//Beginner Series #3 Sum of Numbers
//https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum(a, b) {
  let sum = 0;
  for (let i = a; a < b ? i <= b : i >= b; a < b ? i++ : i--) {
    sum += i;
  }
  return sum;
}