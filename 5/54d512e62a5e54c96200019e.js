//Primes in numbers
//https://www.codewars.com/kata/54d512e62a5e54c96200019e/train/javascript

function primeFactors(n) {
  let str = '';

  let arr = [];
  for (let i = 2; i < n/2; i++) {
    while (n % i === 0) {
      arr.push(i);
      n /= i;
    }
  }
  arr.push(n);
  
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1: 1;
  }

  for (let key in obj) {
    if (obj[key] > 1) {
      str += '('+key+'**'+obj[key]+')';
    } else {
      str += '('+key+')'
    }
  }
  return str;
}

console.log(primeFactors(86240));

//Best Solutions

function primeFactors2(n) {
  for (let s = "", d = 2; n > 1; d++) {
    for (let k = 0; n % d == 0; k++, n /= d);
    s += k ? (k == 1 ? `(${d})` : `(${d}**${k})`) : "";
  }
  return s;
}