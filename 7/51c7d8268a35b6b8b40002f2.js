//Building Strings From a Hash
//https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2/train/javascript

function solution(pairs) {
  return JSON.stringify(pairs)
    .replaceAll(":", " = ")
    .replaceAll(/[{}"]/g, "");
}

const solution = (pairs) =>
  Object.entries(pairs)
    .map(([key, value]) => `${key} = ${value}`)
    .join(",");


console.log(solution({ a: "b", b: "a" }));
