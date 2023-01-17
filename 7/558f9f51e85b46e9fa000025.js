//Difference Of Squares
//https://www.codewars.com/kata/558f9f51e85b46e9fa000025/train/javascript

function differenceOfSquares(n, square = 0, sumSquares = 0) {
  for (let i = 1; i <= n; i++) {
    square += i;
    sumSquares += i ** 2;
  }
  return square ** 2 - sumSquares;
}

console.log(differenceOfSquares(10));
