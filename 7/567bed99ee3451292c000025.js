//Regexp Basics - is it a vowel?
//https://www.codewars.com/kata/567bed99ee3451292c000025

String.prototype.vowel = function () {
  return this.length === 1 && /[aeoui]/gi.test(this);
};

String.prototype.vowel = function () {
  return /^[aeiou]$/i.test(this);
};

console.log("ou".vowel());