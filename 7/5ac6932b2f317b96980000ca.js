//Form The Minimum
//https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript

function minValue(values) {
  let arr = [...new Set(values)];
  return +arr.sort((a, b) => a - b).join("");
}