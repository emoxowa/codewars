//Find the unique number
//https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function findUniq(arr) {
  let nonUnique;
  arr[0] === arr[1] ? nonUnique = arr[0]: nonUnique = arr[2];
  return arr.find((i) => i !== nonUnique);
}

console.log(findUniq([0, 1, 0]));