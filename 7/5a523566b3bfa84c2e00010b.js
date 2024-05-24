//Minimize Sum Of Array (Array Series #1)
//https://www.codewars.com/kata/5a523566b3bfa84c2e00010b

function minSum(arr) {
  let minSumm = 0;
  arr = arr.sort((a, b) => a - b);
  while (arr.length > 0) {
    minSumm += arr[0] * arr[arr.length - 1];
    arr.shift();
    arr.pop();
  }

  return minSumm;
}

console.log(minSum([5, 4, 2, 3]));
