//A Chain adding function
//https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript

function add(n) {
  let fn = function (x) {
    return add(n + x);
  };

  fn.valueOf = function () {
    return n;
  };

  return fn;
}
