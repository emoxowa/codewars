//Is Integer Array?
//https://www.codewars.com/kata/52a112d9488f506ae7000b95/train/javascript

function isIntArray(arr) {
  return arr ? (
    !arr.filter((item) => item % 1 !== 0).length &&
    !arr.includes(NaN) &&
    !arr.filter((item) => typeof item !== 'number').length
  ) : false;
}

console.log(isIntArray([1.23e-7, 2]));

console.log(Number.isInteger(2));

//Best Solutions

let isIntArray = (arr) => !!arr && arr.every(Number.isInteger);

