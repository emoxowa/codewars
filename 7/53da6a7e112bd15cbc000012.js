//Sorting Dictionaries
//https://www.codewars.com/kata/53da6a7e112bd15cbc000012

function sortDict(dict) {
  return Object.entries(dict)
    .sort((a, b) => b[1] - a[1])
    .map((i) => [isNaN(+i[0]) ? i[0] : +i[0], i[1]]);
}

console.log(sortDict({ 1: 2, 2: 4, 3: 6 }));
