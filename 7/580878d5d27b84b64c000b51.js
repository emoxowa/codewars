//Sum of Triangular Numbers
//https://www.codewars.com/kata/580878d5d27b84b64c000b51

function sumTriangularNumbers(n) {
  let sum = 0;
  let last = 0;
  for (let i = 1; i <= n; i++) {
    sum += last + i;
    last = last + i;
  }
  return sum;
}

console.log(sumTriangularNumbers(-291));
