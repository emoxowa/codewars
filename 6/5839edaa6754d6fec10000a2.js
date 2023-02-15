//Find the missing letter
//https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

function findMissingLetter(array) {
  let arr = [];
  for (let i = array[0].charCodeAt(); i <= array[array.length - 1].charCodeAt(); i++) {
    arr.push(i);
  }
  return arr
    .map(i => String.fromCharCode(i))
    .filter((i) => !array.includes(i))[0];
}

console.log(findMissingLetter(["O", "Q", "R", "S"]));