//Speed Control
//https://www.codewars.com/kata/56484848ba95170a8000004d

function gps(s, x) {
  if (x.length < 2) return 0;
  let arr = [];
  for (let i = 0; i < x.length - 1; i++) {
    arr.push((3600 * (x[i + 1] - x[i])) / s);
  }
  return Math.floor(Math.max(...arr));
}

x = [
  0.0, 0.11, 0.22, 0.33, 0.44, 0.65, 1.08, 1.26, 1.68, 1.89, 2.1, 2.31, 2.52,
  3.25,
];
s = 12;

console.log(gps(s, x));
