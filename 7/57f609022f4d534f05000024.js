//Find the stray number
//https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

function stray(numbers) {
  let arr = [...new Set(numbers)];
  return numbers.filter((i) => i == arr[0]).length >
    numbers.filter((i) => i == arr[1]).length
    ? arr[1]
    : arr[0];
}

//Best Solutions

const stray = (nums) => nums.reduce((x, y) => x ^ y);

function findOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }
}

// [1, 1, 1, 2, 1]
//arr.indexOf(1)  === arr.lastIndexOf(1) => 0 !== 4
//arr.indexOf(1)  === arr.lastIndexOf(1) => 0 !== 4
//arr.indexOf(1)  === arr.lastIndexOf(1) => 0 !== 4
//arr.indexOf(2)  === arr.lastIndexOf(2) => 3 === 3