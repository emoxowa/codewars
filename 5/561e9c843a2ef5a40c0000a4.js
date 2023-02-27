//Gap in Primes
//https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4/train/javascript

function gap(g, m, n) {
  
  function isPrime(k) {
    for (let i = 2; i <= Math.sqrt(k); i++) {
      if (k % i === 0) {
        return false;
      }
    }
    return k > 1;
  }

  let primes = [];
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  for (let i = 0; i < primes.length; i++) {
    if (primes[i] + g === primes[i + 1]) {
      return [primes[i], primes[i + 1]];
    } 
  }
  return null;
}

console.log(gap(4, 100, 110));


