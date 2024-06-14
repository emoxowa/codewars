//Fix My Phone Numbers!
//https://www.codewars.com/kata/596343a24489a8b2a00000a2

function isItANum(str) {
  const numbers = str.replace(/\D/gi, "");
  return numbers[0] === "0" && numbers.length === 11
    ? numbers
    : "Not a phone number";
}

console.log(isItANum("S:)0207ERGQREG88349F82!efRF)"));