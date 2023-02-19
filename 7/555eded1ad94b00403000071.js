//Sum of the first nth term of Series
//https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript

function SeriesSum(n) {
  let sum = 1;
  let denom = 4;
  for (let i = 2; i <= n; i++) {
    sum += 1 / denom;
    denom += 3;
  }
  return n=== 0? '0.00' : sum.toFixed(2);
}

console.log(SeriesSum(0));