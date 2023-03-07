//Roman Numerals Encoder
//https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/javascript

function solution(number) {
  let obj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let str = '';
  for (let i in obj) {
    while (number >= obj[i]) {
      str+=i;
      number = number - obj[i];
    }
  }

  return str;
}
console.log(solution(1990));