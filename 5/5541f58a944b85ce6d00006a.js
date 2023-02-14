//Product of consecutive Fib numbers
//https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript

function productFib(prod) {
  let fib = [0, 1]; 
  for (let i = 0; fib[i] < prod; i++) {
    fib.push(fib[i]+fib[i+1]);
  }

  let n = Math.sqrt(prod);
  let a = fib.filter((i) => i < n).reverse()[0];
  let b = fib.filter((i) => i > n)[0];

  if (a * b < prod) {
    a = fib.filter((i) => i > n)[0];
    b = fib.filter((i) => i > n)[1];
  } 

  return [a, b, a * b === prod];
  }

console.log(productFib(74049690));

//Best Solutions

function productFib(prod) {
  let [a, b] = [0, 1];
  while (a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}