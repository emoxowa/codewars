//Filter the number
//https://www.codewars.com/kata/55b051fac50a3292a9000025

var filterString = function (value) {
  return +[...value].filter((i) => !isNaN(i)).join("");
};

var filterString = function (value) {
  return +value.replace(/\D/g, "");
};

console.log(filterString("aa1bb2cc3dd"));
