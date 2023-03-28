//Fix string case
//https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript

function solve(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i].toLowerCase() == s[i]) {
      count++;
    }
  }
  return count >= s.length / 2 ? s.toLowerCase() : s.toUpperCase();
}

console.log(solve("code"));