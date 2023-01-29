//Persistent Bugger.
//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function persistence(num, count = 0) {
  if (num < 10) return count;
  num = Array.from(String(num), Number).reduce((sum, curr) => sum * curr);
  count++;
  return persistence(num, count);
}

console.log(persistence(39));