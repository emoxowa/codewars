//Sort an array by value and i
//https://www.codewars.com/kata/58e0cb3634a3027180000040

function sortByValueAndIndex(array) {
  return array
    .map((value, index) => [value, value * (index + 1)])
    .sort((a, b) => a[1] - b[1])
    .map(pair => pair[0])
}

console.log(sortByValueAndIndex([23, 2, 3, 4, 5]));
