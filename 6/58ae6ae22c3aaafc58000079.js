//Permute a Palindrome
//https://www.codewars.com/kata/58ae6ae22c3aaafc58000079/train/javascript

function permuteAPalindrome(input) {
  let obj = {}; 
  for (let i = 0; i < input.length; i++) {
    obj[input[i]] = obj[input[i]] ? obj[input[i]] + 1 : 1;
  }
  let arr = Object.values(obj).map((item) => item % 2);
  return input.length % 2 === 0
    ? arr.reduce((sum, curr) => sum + curr, 0) == 0
    : arr.reduce((sum, curr) => sum + curr, 0) == 1 || !input;
}

console.log(permuteAPalindrome("_"));
