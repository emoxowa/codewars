//A Needle in the Haystack
//https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript

function findNeedle(haystack) {
  return `found the needle at position ${haystack.findIndex(i => i == 'needle')}`;
}