//Take a Ten Minutes Walk
//https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
  let obg = { n: 1, s: -1, e: 2, w: -2 };
  return walk.length != 10 ? false : walk
    .map((i) => obg[i])
    .reduce((sum, curr) => sum + curr, 0) == 0;
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));

