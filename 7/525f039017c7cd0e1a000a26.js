//Palindrome chain length
//https://www.codewars.com/kata/525f039017c7cd0e1a000a26

var palindromeChainLength = function (n) {
  let count = 0;
  let current = n
  while (current !== +String(current).split("").reverse().join("")) {
    current += +String(current).split("").reverse().join("");
    count++;
  }

  return count;
};

console.log(palindromeChainLength(87));
