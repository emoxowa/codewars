//Sum of array singles
//https://www.codewars.com/kata/59f11118a5e129e591000134

function repeats(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    } else {
      result.splice(result.indexOf(arr[i]), 1);
    }
  }
  return result[0] + result[1];
}

function repeats(arr) {
  return arr
    .filter((v) => arr.indexOf(v) === arr.lastIndexOf(v))
    .reduce((a, b) => a + b, 0);
}

console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]));
