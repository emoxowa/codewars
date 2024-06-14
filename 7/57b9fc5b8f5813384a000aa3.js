//Fruit string calculator
//https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3

function calculate(string) {
  const [num1, num2] = string.match(/\d+/g);
  return string.includes("gains") ? +num1 + +num2 : +num1 - +num2
}

console.log(calculate("Jerry has 34 apples and gains 6"));