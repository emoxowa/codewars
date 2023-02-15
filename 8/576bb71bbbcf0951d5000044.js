//Given an array of integers.
//https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

function countPositivesSumNegatives(input) {
  if (!input) {
    return [];
  }
  let count = 0;
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      count++;
    }
    if (input[i] < 0) {
      sum += input[i];
    }
  }
  return count === 0 && sum === 0 ? [] : [count, sum];
}