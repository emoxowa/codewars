//Does my number look big in this?
//https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

function narcissistic(value) {
  let arr = Array.from(String(value), Number);
  let num = arr.length;
  return value === arr.reduce((sum, curr) => sum + Math.pow(curr, num), 0);
}

console.log(narcissistic(153));