//Last digit of a large number
//https://www.codewars.com/kata/5511b2f550906349a70004e1/train/javascript

var lastDigit = function (str1, str2) {
  let last1 = +str1[str1.length - 1];
  let last2 = +str2[str2.length - 1];
  console.log(last1);

  if (str2 == 0) return 1;
  if ((last1 == 1 || last1 == 5 || last1 == 6 || last1 == 0)) {
      return last1;
    } else if (last1 == 4) {
      if (last2 % 2 === 0) return 6;
      else {
        return 4;
      }
    } else if (last1 == 9) {
      if (last2 % 2 === 0) return 1;
      else {
        return 9;
      }
    } else if (last1 == 3) {
      let result = [1, 3, 9, 7];
      return result[str2 % 4];
    } else if (last1 == 2) {
      let result = [6, 2, 4, 8];
      return result[+str2 % 4];
    } else if (last1 == 7) {
      let result = [1, 7, 9, 3];
      return result[+str2 % 4];
    } else if (last1 == 8) {
      let result = [6, 8, 4, 2];
      return result[+str2 % 4];
    }
};

console.log(lastDigit("10", "10000000000"));

//Best Solutions

var lastDigit = function (str1, str2) {
  return +str2 === 0
    ? 1
    : Math.pow(+str1.slice(-1), (+str2.slice(-2) % 4) + 4) % 10;
};


const lastDigit = (str1, str2) =>
  +str2 ? str1.slice(-1) ** (str2.slice(-2) % 4 || 4) % 10 : 1;