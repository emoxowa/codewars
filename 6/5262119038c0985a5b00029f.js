//Is a number prime?
//https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript

function isPrime(num) {
  let n = Math.abs(num);
  let arr = [];
  if (n === 0 || n === 1 || n === 4) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      arr.push(i);
      n /= i;
    }
  }
  arr.push(n);
  return arr.includes(num);
}
console.log(isPrime(5));


//Best Solutions

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}