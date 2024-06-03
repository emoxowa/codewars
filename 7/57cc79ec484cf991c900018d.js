//Double Sort
//https://www.codewars.com/kata/57cc79ec484cf991c900018d

function dbSort(a) {
  return a
    .filter((i) => typeof i === "number")
    .sort((a, b) => a - b)
    .concat(a.filter((i) => typeof i === "string").sort());
}

console.log(dbSort(["C", "W", "W", "W", 1, 2, 0]));
