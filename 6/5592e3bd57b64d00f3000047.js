//Build a pile of Cubes
//https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript

function findNb(m) {
  let sum = 1;
  let n = 1;
  while (sum < m) {
    n++;
    sum += Math.pow(n, 3);
  }
  return sum == m ? n : -1;
}

console.log(findNb(24723578342962));
