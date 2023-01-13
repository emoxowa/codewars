// Get number from string
//https://www.codewars.com/kata/57a37f3cbb99449513000cd8/train/javascript

function getNumberFromString(s) {
  return +s.match(/\d/gi).join('');
}

console.log(getNumberFromString("hell5o wor6ld"));