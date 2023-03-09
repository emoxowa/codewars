//Roman Numerals Decoder
//https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript

function solution(roman) {
  let obj = {
    CM: 900,
    CD: 400,
    XC: 90,
    XL: 40,
    IX: 9,
    IV: 4,
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  let sum = 0;
  for (let i in obj) {
    while (roman.includes(i)) {
      sum += obj[i];
      roman = roman.replace(i, '');
    }
  }

  return sum;
}

console.log(solution("MDCLXVI"));