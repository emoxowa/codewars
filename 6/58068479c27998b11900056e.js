//Sorting on planet Twisted-3-7
//https://www.codewars.com/kata/58068479c27998b11900056e

function sortTwisted37(array) {
  return array
    .map((i) => [i, +`${i}`.replace(/[37]/g, (a) => (a == 3 ? 7 : 3))])
    .sort((a, b) => a[1] - b[1])
    .map((i) => i[0]);
}

console.log(sortTwisted37([12, 13, 14, 72]));
