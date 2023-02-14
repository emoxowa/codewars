//Detect Pangram
//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram(string) {
  return new Set(string.toLowerCase().replace(/[^a-z]/g, '')).size  === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));