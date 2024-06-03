//Return a sorted list of objects
//https://www.codewars.com/kata/52705ed65de62b733f000064

function sortList(sortBy, list) {
  return list.sort((a, b) => b[sortBy.toString()] - a[sortBy.toString()]);
}

const list = [
  { a: 1, b: 3 },
  { a: 3, b: 2 },
  { a: 2, b: 40 },
  { a: 4, b: 12 },
];

console.log(sortList('a', list));