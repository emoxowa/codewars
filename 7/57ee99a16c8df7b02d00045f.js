//Flatten and sort an array
//https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript

"use strict";

function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b);
}