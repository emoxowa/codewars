//Find The Parity Outlier
//https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers) {
  let bin = integers.map((item) => (item % 2 ? 1 : 0)).join('');
  return bin.match(/1/g).length == 1
    ? integers.find((i) => i % 2 !== 0)
    : integers.find((i) => i % 2 == 0 );
}

console.log(findOutlier([1, 2, 3]));

//Best Solutions

function findOutlier(int) {
  var even = int.filter((a) => a % 2 == 0);
  var odd = int.filter((a) => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}