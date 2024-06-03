//Ordering the words!
//https://www.codewars.com/kata/55d7e5aa7b619a86ed000070

function orderWord(s) {
  return s ? s.split("").sort().join("") : "Invalid String!";
}

console.log(orderWord("Hello, World!"));
