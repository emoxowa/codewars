//Find the divisors!
//https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript

function divisors(integer) {
  let arr = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) arr.push(i);
  }
  return arr.length ? arr : `${integer} is prime`;
};