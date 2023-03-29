//Largest 5 digit number in a series
//https://www.codewars.com/kata/51675d17e0c1bed195000001/train/javascript

function solution(digits) {
  let str = String(digits);
  let result = [];
  for (let i = 0; i < str.length - 4; i++) {
    result.push(str.slice(i, i+5));
  }
  return Math.max(...result);
}

console.log(solution(1234567890));