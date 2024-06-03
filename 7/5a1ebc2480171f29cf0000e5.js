//Sort rectangles and circles by area II
//https://www.codewars.com/kata/5a1ebc2480171f29cf0000e5

function sortByArea(array) {
  const getArea = (i) => (Array.isArray(i) ? i[0] * i[1] : Math.PI * i ** 2);
  return [...array].sort((a, b) => getArea(a) - getArea(b));
};

const array = [[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]];

console.log(sortByArea(array));
