//How Many Unique Consonants?
//https://www.codewars.com/kata/5a19226646d843de9000007d/train/javascript

function countConsonants(str) {
  str = str.replace(/[aeiou]|[^a-z]/gi, '').toLowerCase().split('');
  let arr = [];
  str.map((i) => {
    if (!arr.includes(i)) {
    arr.push(i)
  }})
  return arr.length;
}

console.log(countConsonants("sillystring"));

//Best Solutions

function countConsonants(str) {
  return new Set(str.toLowerCase().replace(/[^a-z]|[aeiou]/g, "")).size;
}

const numOne = [0, 2, 4, 6, 8, 8];
const numTwo = [1, 2, 3, 4, 5, 6];
const duplicatedValues = [...new Set([...numOne, ...numTwo])];
console.log(duplicatedValues);