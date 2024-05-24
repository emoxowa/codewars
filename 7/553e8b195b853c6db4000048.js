//All unique
//https://www.codewars.com/kata/553e8b195b853c6db4000048

function hasUniqueChars(str) {
  return str.length === [...new Set(str)].length;
}

console.log(hasUniqueChars("  nAa"));