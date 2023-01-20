//Create Phone Number
//https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

function createPhoneNumber(numbers) {
  return `(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers.slice(6, 10).join('')}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//Best Solutions
function createPhoneNumber(numbers) {
  numbers = numbers.join("");
  return `(${numbers.substring(0, 3)}) ${numbers.substring(3, 6)}-${numbers.substring(6)}`
}

function createPhoneNumber(numbers) {
  return numbers.join("").replace(/(...)(...)(.*)/, "($1) $2-$3");
}