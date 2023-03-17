//Summing a number's digits
//https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript

function sumDigits(number) {
  return Array.from(String(Math.abs(number)), Number).reduce(
    (sum, curr) => sum + curr,
    0
  );
}

console.log(sumDigits(-32));

//Best Solutions

const sumDigits2 = (number) =>
  [...`${Math.abs(number)}`].reduce((pre, val) => pre + +val, 0);

