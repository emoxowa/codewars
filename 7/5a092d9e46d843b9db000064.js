//Array element parity
//https://www.codewars.com/kata/5a092d9e46d843b9db000064/train/javascript

function solve(arr) {
  return arr.filter((item) => !arr.includes(-item))[0]
};

console.log(solve([-9, -105, -9, -9, -9, -9, 105]));

//Best Solutions 
const solve2 = (array) => array.find((value) => !array.includes(-value));
