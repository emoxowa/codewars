//Moving Zeros To The End
//https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function moveZeros(arr) {
  let arr1 = arr.filter((i) => i !== 0);
  let arr0 = new Array(arr.length - arr1.length).fill(0);
  return [...arr1,...arr0];
}

console.log(moveZeros(["a", false, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

//Best Solutions

var moveZeros = function (arr) {
  return [...arr.filter((n) => n !== 0), ...arr.filter((n) => n === 0)];
};