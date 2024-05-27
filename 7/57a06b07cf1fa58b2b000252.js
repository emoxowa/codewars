//Is it a letter?
//https://www.codewars.com/kata/57a06b07cf1fa58b2b000252/train/javascript

function isItLetter(character) {
  return /[a-zA-Z]/.test(character);
}

console.log(isItLetter("["));
