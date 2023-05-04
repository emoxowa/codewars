//Backspaces in string
//https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript

function cleanString(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    s[i] == '#' ? arr.pop() : arr.push(s[i]);
  }
  return arr.join('');
}

console.log(cleanString("abc#d##c"));