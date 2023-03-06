//Memoized Fibonacci
//https://www.codewars.com/kata/529adbf7533b761c560004e5/train/javascript

let memo = function (f) {
  var cache = {};
  return function (n) {
    if (!cache[n]) cache[n] = f(n);
    return cache[n];
  };
};
let fibonacci = memo(function (n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});


console.log(fibonacci(50));

const fib = (function () {
  const memo = {};

  function f(n) {
    let value;

    if (n in memo) {
      value = memo[n];
    } else {
      if (n === 0 || n === 1) {
        value = n;
      } else {
        value = f(n - 1) + f(n - 2);
      }

      memo[n] = value;
    }

    return value;
  }

  return f;
})();