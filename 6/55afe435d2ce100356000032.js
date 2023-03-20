//Javascript from the Inside #2: Filter
//https://www.codewars.com/kata/55afe435d2ce100356000032/train/javascript

Array.prototype.filter = function (callback /*, thisArg*/) {
  let O = Object(this);
  let lenValue = O["length"];
  let len = lenValue >>> 0;

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  let T = arguments.length > 1 ? arguments[1] : undefined;
  let A = new Array();
  let k = 0;

  while (k < len) {
    let Pk = k.toString();
    let kPresent = Pk in O;
    if (kPresent) {
      let kValue = O[Pk];
      let selected = callback.call(T, kValue, k, O);
      if (selected) {
        A[A.length] = kValue;
      }
    }

    k++;
  }

  return A;
};

console.log([1, 2, 3].filter((i) => i % 2 !== 0));


//https://translated.turbopages.org/proxy_u/en-ru.ru.0cf75010-6417cf01-990d406b-74722d776562/https/262.ecma-international.org/5.1/#sec-15.4.4.19

Array.prototype.filter = function (f, receiver) {
  var len = this.length;
  var acc = [];
  for (var i = 0; i < len; i++) {
    if (i in this && f.call(receiver, this[i], i, this)) {
      acc.push(this[i]);
    }
  }
  return acc;
};