//String to integer conversion
//https://www.codewars.com/kata/54fdadc8762e2e51e400032c

function myParseInt(str) {
  str = str.trim();
  return /^\d+$/.test(str) ? parseInt(str) : NaN;
}

console.log(myParseInt("1"));
