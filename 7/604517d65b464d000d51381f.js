//Strange mathematics
//https://www.codewars.com/kata/604517d65b464d000d51381f

function strangeMath(n, k) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr.sort().indexOf(k) + 1;
}

function strangeMath(n, k) {
  return [...Array(n + 1).keys()].sort().indexOf(k);
}

console.log(strangeMath(15, 5));