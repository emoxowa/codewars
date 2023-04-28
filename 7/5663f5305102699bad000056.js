//Maximum Length Difference
//https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript

function mxdiflg(a1, a2) {
  const f = (arr) => {
    return arr.map((i) => i.length);
  }
  return a1.length == 0 || a2.length == 0
    ? -1
    : Math.max(
        Math.max(...f(a2)) - Math.min(...f(a1)),
        Math.max(...f(a1)) - Math.min(...f(a2))
      );
}