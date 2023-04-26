//Sum of Minimums!
//https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript

function sumOfMinimums(arr) {
  return arr.reduce((sum, curr) => sum + Math.min(...curr), 0);
}