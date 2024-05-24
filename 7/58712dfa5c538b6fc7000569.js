//Simple beads count
//https://www.codewars.com/kata/58712dfa5c538b6fc7000569

function countRedBeads(n) {
  return n <= 1 ? 0 : n * 2 - 2;
}

console.log(countRedBeads(5));
