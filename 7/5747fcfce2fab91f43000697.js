//Sort by Example
//https://www.codewars.com/kata/5747fcfce2fab91f43000697/train/javascript

function exampleSort(arr, exampleArr) {
  return arr.sort((a, b) => exampleArr.indexOf(a) - exampleArr.indexOf(b));
}

console.log(exampleSort([1, 2, 3, 3, 3, 4, 5], [2, 3, 4, 1, 5]));
