//Find the next perfect square!
//https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

function findNextSquare(sq) {
  let number = Math.sqrt(sq);
  return Math.floor(number) === number ? Math.pow(number + 1, 2) : -1;
}