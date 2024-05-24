//Sort by Last Char
//https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0

function last(x) {
  return x
    .split(" ")
    .sort((a, b) => a.at(-1).charCodeAt(0) - b.at(-1).charCodeAt(0));
 }

console.log(last("man i need a taxi up to ubud"));