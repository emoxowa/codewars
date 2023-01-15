//Sum of Digits / Digital Root
//https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digitalRoot(n) {
  n = Array.from(String(n), Number).reduce((sum, cur) => sum + cur, 0);
  return String(n).length > 1 ? digitalRoot(n) : n;
}

console.log(digitalRoot(456));

//Best Solutions

function digital_root(n) {
  return ((n - 1) % 9) + 1;
}
//123 -> 122 --> 2

console.log(123 % 9);