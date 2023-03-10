//CamelCase Method
//https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript

String.prototype.camelCase = function () {
  return this.toString()
    .split(" ")
    .map((i) => i.replace(/\b./gi, (a) => a.toUpperCase()))
    .join("");
};