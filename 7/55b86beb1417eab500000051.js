//Find the longest gap!
//https://www.codewars.com/kata/55b86beb1417eab500000051

function gap(num) {
  let arr = num.toString(2).replace(/0+$/, "").match(/0+/g) || [''];
  return Math.max(...arr.map((i) => i.length));
}

console.log(gap(529));
