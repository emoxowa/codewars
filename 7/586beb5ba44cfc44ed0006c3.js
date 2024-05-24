//Sum even numbers
//https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3

function sumEvenNumbers(input) {
  return input.reduce((acc, curr) => (curr % 2 ? acc : acc + curr), 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
