//Mutual Recursion
//https://www.codewars.com/kata/53a1eac7e0afd3ad3300008b/train/javascript

function F(n) {
  return n === 0 ? 1 : n - M(F(n - 1));
}

function M(n) {
  return n === 0 ? 0 : n - F(M(n - 1));
}

console.log(F(7));
