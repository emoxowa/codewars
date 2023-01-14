//Simple string characters
//https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/javascript

function solve(s) {
  let upperCase = s.match(/[A-Z]/g) || [];
  let lowerCase = s.match(/[a-z]/g) || [];
  let numbers = s.match(/[0-9]/g) || [];
  let special = s.match(/[^A-Z0-9]/gi) || [];
  return [upperCase.length, lowerCase.length, numbers.length, special.length];
}

console.log(solve("B._1@5_'?BF9,C/C2JX054354E2<|26084119K"));