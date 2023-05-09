//Consonant value
//https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript

function solve(s) {
  s = s.replace(/[aeiou]/gi, ' ');
  return Math.max(...s.split(' ').map((i) => i.split('').reduce((sum, curr)=> sum + curr.charCodeAt()-96, 0)));
};

console.log(solve("zodiacs"));