//Sort Out The Men From Boys
//https://www.codewars.com/kata/5af15a37de4c7f223e00012d

function menFromBoys(arr) {
  arr = [...new Set(arr)];
  return [
    ...arr.filter((i) => i % 2 === 0).sort((a, b) => a - b),
    ...arr.filter((i) => i % 2).sort((a, b) => b - a),
  ];
}

console.log(menFromBoys([2, 43, 95, 90, 37]));
