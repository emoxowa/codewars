//Simple Fun #88: Sort By Height
//https://www.codewars.com/kata/589577f0d1b93ae32a000001

function sortByHeight(a) {
  const people = a.filter((item) => item !== -1);
  people.sort((a, b) => a - b);
  let index = 0;
  return a.map((item) => (item === -1 ? item : people[index++]));
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
