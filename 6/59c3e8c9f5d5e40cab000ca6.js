//Sum two arrays
//https://www.codewars.com/kata/59c3e8c9f5d5e40cab000ca6/train/javascript

function addArrays(array1, array2) {
  if (!array1.length && !array2.length) {
    return [];
  } 
  let arrayToNumber1 = array1.length ? parseInt(array1.join("")) : 0;
  let arrayToNumber2 = array2.length ? parseInt(array2.join("")) : 0;
  let sum = arrayToNumber1 + arrayToNumber2;
  let arr = Array.from(String(Math.abs(sum)), Number);
  return sum >= 0 ? arr : arr.map((a, b) => b == 0 ? a = -a : a);
}

console.log(addArrays([], []));