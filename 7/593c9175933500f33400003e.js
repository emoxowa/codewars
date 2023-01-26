//Return the first M multiples of N
//https://www.codewars.com/kata/593c9175933500f33400003e/train/javascript

function multiples(m, n) {
  let arr = [];
  for (let i = 1; i <= m; i++) {
    arr.push(n * i);
  }
  return arr;
}

console.log(multiples(3, 5));