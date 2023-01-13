//Find the Mine!
//https://www.codewars.com/kata/528d9adf0e03778b9e00067e/train/javascript

function mineLocation(field) {
  let arr = [];
  field.map((item, index) => {
    let a = item.findIndex((i) => i == 1);
    if (a!= -1) {
      arr.push(index);
      arr.push(a);
    }
  });
  return arr;
}

console.log(
  mineLocation([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ])
);