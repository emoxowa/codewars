//Maximum Product
//https://www.codewars.com/kata/5a4138acf28b82aa43000117

function adjacentElementsProduct(array) {
  let arr = []
  for (let i = 0; i < array.length-1; i++) {
    arr.push(array[i] * array[i + 1]);
  }
  return Math.max(...arr);
}

console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]));
