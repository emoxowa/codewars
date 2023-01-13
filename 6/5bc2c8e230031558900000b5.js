//Rooks
//https://www.codewars.com/kata/5bc2c8e230031558900000b5/train/javascript

function rooks(n, k) {
  let count = 1n;
  for (let i = 1n; i <= k; i++, n--) {
    count = (count * n * n) / i;
  }
  return count;
}

console.log(rooks(4n, 2n));

//res = (1 * 4 * 4) / 1 = 16
//res = (16 * 3 * 3) / 2 = 72