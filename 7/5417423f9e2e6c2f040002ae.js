//Digitize
//https://www.codewars.com/kata/5417423f9e2e6c2f040002ae/train/javascript

function digitize(n) {
  return [...`${n}`].map(Number);
}

console.log(digitize(14578));