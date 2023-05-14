//Largest pair sum in array
//https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

function largestPairSum(numbers) {
  numbers = numbers.sort((a, b) => b - a);
  return numbers[0] + numbers[1];
}

console.log(largestPairSum([10, 14, 2, 23, 19]));