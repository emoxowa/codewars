//max diff - easy
//https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095

function maxDiff(list) {
  let arr = list.sort((a, b) => a - b);
  return arr[arr.length - 1] - arr[0] || 0;
}

console.log(maxDiff([16]));
