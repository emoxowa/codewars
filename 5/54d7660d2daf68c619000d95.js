//54d7660d2daf68c619000d95
//https://www.codewars.com/kata/54d7660d2daf68c619000d95/train/javascript


function convertFrac(lst) {
  let maxArr = [];
  lst.map(i => maxArr.push(i[1]));
  let num = 1;
  while (!maxArr.every((i) => num % i === 0)) {
    num++;
  }
  let result = "";
  lst.forEach((i) => (result += `(${i[0] * (num / i[1])},${num})`));
  return result;
}

console.log(
  convertFrac([
    [1, 1],
    [3, 1],
    [4, 1],
    [5, 1],
  ])
);