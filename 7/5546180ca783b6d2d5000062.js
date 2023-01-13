//Squares sequence
//https://www.codewars.com/kata/5546180ca783b6d2d5000062/train/javascript

function squares(x, n) {
  let arr = [x];
  for (let i = 0; i < n -1; i++) {
    arr.push(arr[i] ** 2);
  }
  return n <= 0 ? []:arr;
}

console.log(squares(2, 0));

//Best Solutions

const squares2 = (x, n) =>
  [...Array((n > 0) * n)].map((_, idx) => x ** (2 ** idx));

  console.log(5 ** 0);