//Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
//https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript

function sumDigPow(a, b) {
  let arr = [];
  for (let i = a; i < b; i++) {
    let sum = Array.from(String(i), Number).reduce((sum, curr, index) => sum + Math.pow(curr, index+1),0);
    if (i === sum) {
      arr.push(sum);
    }
  }
  return arr; 
}