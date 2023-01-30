//Sum of two lowest positive integers
//https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

function sumTwoSmallestNumbers(numbers) {
  return numbers
    .sort((a, b) => b - a)
    .reduceRight((sum, curr, index) => (index < numbers.length - 2) ? sum : sum + curr, 0);
}

console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));

//Best Solutions

function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a,b) => a - b);
  return numbers[0] + numbers[1];
};