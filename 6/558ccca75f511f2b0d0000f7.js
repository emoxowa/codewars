//Javascript from the Inside #1 : Map
//https://www.codewars.com/kata/558ccca75f511f2b0d0000f7/train/javascript

Array.prototype.map = function (callBack, context) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    let number = this.hasOwnProperty(i)
      ? callBack.call(context, this[i], i, this)
      : undefined;
    arr.push(number);
    console.log(number);
    console.log(arr);
  }
  return arr;
};

Array.prototype.map = function (callback/*, thisArg*/) {
  let T, A, k;
  if (this == null) {
    throw new TypeError("this is null or not defined");
  }
  let O = Object(this);
  let len = O.length >>> 0;
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  if (arguments.length > 1) {
    T = arguments[1];
  }
  A = new Array(len);
  k = 0;
  while (k < len) {
    let kValue, mappedValue;
    if (k in O) {
      kValue = O[k];
      mappedValue = callback.call(T, kValue, k, O);
      A[k] = mappedValue;
    }
    k++;
  }
  return A;
};

console.log([1, 2, 3].map((i) => i * 2));

Array.prototype.map = function (fn, nThis) {
  var newArr = this.slice();
  this.forEach((v, i, arr) => (newArr[i] = fn.apply(nThis, [v, i, arr])));
  return newArr;
};