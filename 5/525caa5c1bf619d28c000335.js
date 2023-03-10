//Tic-Tac-Toe Checker
//https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/javascript

function isSolved(board) {
  let arr = board.reduce((acc, curr) => acc.concat(curr), [])
  function check(par) {
    if (
      (arr[0] == par && arr[4] == par && arr[8] == par) ||
      (arr[2] == par && arr[4] == par && arr[6] == par) ||
      (arr[0] == par && arr[1] == par && arr[2] == par) ||
      (arr[3] == par && arr[4] == par && arr[5] == par) ||
      (arr[6] == par && arr[7] == par && arr[8] == par) ||
      (arr[0] == par && arr[3] == par && arr[6] == par) ||
      (arr[1] == par && arr[4] == par && arr[7] == par) ||
      (arr[2] == par && arr[5] == par && arr[8] == par)
    ) {
      return true;
    } else {
      false;
    }
  }
  return check(1) ? 1 : check(2) ? 2 : arr.includes(0) ? -1 : 0;
}

console.log(
  isSolved([
    [2, 1, 1],
    [0, 1, 1],
    [2, 2, 2],
  ])
);

//Best Solutions

function isSolved(board) {
  board = board.join("-").replace(/,/g, "");
  if (/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
  if (/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
  if (/0/.test(board)) return -1;
  return 0;
}