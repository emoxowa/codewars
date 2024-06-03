//Remove consecutive duplicate words
//https://www.codewars.com/kata/5b39e91ee7a2c103300018b3

function removeConsecutiveDuplicates(string) {
  return string
    .split(" ")
    .reduce(
      (acc, cur, i, arr) => (cur === arr[i - 1] ? acc : acc + cur + " "),
      ""
    )
    .trim();
}

function removeConsecutiveDuplicates(str) {
  return str
    .split(" ")
    .filter((word, index, arr) => word !== arr[index + 1])
    .join(" ");
}

console.log(removeConsecutiveDuplicates(""));
