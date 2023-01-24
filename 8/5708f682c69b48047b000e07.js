//Multiply the number
//https://www.codewars.com/kata/5708f682c69b48047b000e07/train/javascript

function multiply(number) {
  return number * Math.pow(5, String(Math.abs(number)).length);
}