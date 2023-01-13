//Odd-Even String Sort
//https://www.codewars.com/kata/580755730b5a77650500010c/train/javascript

function sortMyString(S) {
  let a = S.split('').filter((item, index) => index % 2 === 0).join('');
  let b = S.split('').filter((item, index) => index % 2 !== 0).join('');
  return `${a} ${b}`;
}

console.log(sortMyString("CodeWars"));

// Best Solutions
const sortMyString = (s) => s.replace(/(.)./g, "$1") + " " + s.replace(/.(.)?/g, "$1");