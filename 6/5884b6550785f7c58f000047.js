//Organise duplicate numbers in list
//https://www.codewars.com/kata/5884b6550785f7c58f000047

function group(arr) {
  return [...new Set(arr)].map(i => arr.filter(j => j === i) );
}

console.log(
  group([
    -2, 8, -8, -8, -3, 5, 5, 8, 10, 10, 10, 8, 2, -8, -3, -4, 0, 0, 0, 5, -2,
    -2, 0, 2, 5, 2, -9, 0, 5, 8,
  ])
);
