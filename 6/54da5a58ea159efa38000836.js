//https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
//Find the odd int

function findOdd(A) {
  let arr = [];
  A = A.sort();
  for (let i = 0; i < A.length; i++) {
    if (!arr.includes(A[i])) {
      arr.push(A[i]);
    } else {
      arr.pop();
    }
  }
  return arr[0];
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

//Best Solutions
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);