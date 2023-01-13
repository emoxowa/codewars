//Row of the odd triangle
//https://www.codewars.com/kata/5d5a7525207a674b71aa25b5/train/javascript

function oddRow(n) {
  let arr = [];
  let a = 0;
  for (let i = 0; i < n; i++) {
    a += i;
  }
  let start = 1 + 2 * a;
  for (let j = 0; j < n; j++) {
    arr.push(start);
    start += 2;
  }
  return arr;
}

console.log(oddRow(1));

//Best Solutions

function oddRow(n) {
  first_item = n * (n - 1) + 1;
  result = [];
  for (var i = 0; i < n; i++) {
    result.push(first_item + i * 2);
  }
  return result;
}