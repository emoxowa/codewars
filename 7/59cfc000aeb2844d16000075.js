//Alternate capitalization
//https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

function capitalize(s){
  let big = [];
  let small = [];
  for (let i = 0; i < s.length; i++) {
    i % 2 ? big.push(s[i].toLowerCase()) : big.push(s[i].toUpperCase());
    i % 2 ? small.push(s[i].toUpperCase()) : small.push(s[i].toLowerCase());
  }
  
  return [big.join(''), small.join('')];
};