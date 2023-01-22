//Indexed capitalization
//https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/javascript

function capitalize(s, arr) {
  return s.replace(/./g, (a, b) => arr.includes(b) ? a.toUpperCase() : a);
};

console.log(capitalize("abcdef",[1,2,5]));