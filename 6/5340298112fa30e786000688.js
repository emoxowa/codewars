//Difference of 2
//https://www.codewars.com/kata/5340298112fa30e786000688

function twosDifference(input) {
  return input
    .filter((num) => input.indexOf(num + 2) != -1)
    .sort((a, b) => a - b)
    .map((num) => [num, num + 2]);
}

console.log(twosDifference([4, 3, 1, 5, 6]));
