//Sum Arrays
//https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript

function sum (numbers) {
    "use strict";
  return numbers.reduce((sum, curr) => sum + curr, 0);
};
