//Playing with digits
//https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript

function digPow(n, p) {
  let num = Array.from(String(n), Number).reduce((sum, curr) => sum + Math.pow(curr, p++), 0) / n
  return Math.floor(num) === num ? num: -1;
}

console.log(digPow(92, 1));
