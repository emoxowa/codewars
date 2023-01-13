//Rotate for a Max
//https://www.codewars.com/kata/56a4872cbb65f3a610000026/train/javascript

function maxRot(n) {
  let arr = [n];
  n = n.toString().split('');
  for (let i = 0; i < n.length-1; i++) {
    n.push(n[i]);
    n.splice(i, 1);
    arr.push(+n.join(''));
  }
  const max = arr.reduce((max, curr) => (curr > max ? curr : max));
  return max;
}

console.log(maxRot(56789));