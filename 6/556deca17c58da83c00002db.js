//Tribonacci Sequence
//https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

function tribonacci(signature, n) {
  let arr = n > 3 ? signature : signature.slice(0, n);
  for (let i = 0; i < n-3; i++) {
    arr.push(arr[i]+arr[i+1]+arr[i+2]);
  }
  return arr;
}

//[1,2,3], 10], [1,2,3,6,11,20,37,68,125,230]

console.log(tribonacci([0, 0, 1], 10));