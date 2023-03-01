//The Supermarket Queue
//https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

function queueTime(customers, n) {
  let arr = Array(n).fill(0);
  for (let i = 0; i < customers.length; i++) {
    arr[0] += customers[i];
    arr.sort((a, b) => a - b);
  }

  return Math.max(...arr);
}

console.log(queueTime([2, 3, 10, 1, 4], 3));

