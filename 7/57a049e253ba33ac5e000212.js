//Factorial
//https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

//Best Solutions

const factorial = (n) => (n ? factorial(n - 1) * n : 1);