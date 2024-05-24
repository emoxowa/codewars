//Nth Smallest Element (Array Series #4)
//https://www.codewars.com/kata/5a512f6a80eba857280000fc

function nthSmallest(arr, pos) {
  return arr.sort((a, b) => a - b)[pos-1];
}

console.log(nthSmallest([2, 169, 13, -5, 0, -1], 4));
