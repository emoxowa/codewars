//Debug Sum of Digits of a Number
//https://www.codewars.com/kata/563d59dd8e47a5ed220000ba/train/javascript

function getSumOfDigits(integer) {
  let sum = null;
  let digits = Math.floor(integer).toString();
  for (let i = 0; i < digits.length; i++) {
    sum += +digits[i];
  }
  return sum;
}
