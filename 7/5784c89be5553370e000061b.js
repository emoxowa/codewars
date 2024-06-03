//Product of Largest Pair
//https://www.codewars.com/kata/5784c89be5553370e000061b

function maxProduct(a) {
  let max1 = Math.max(...a);
  a.splice(a.indexOf(max1), 1);
  let max2 = Math.max(...a);
  return max1*max2;
}

console.log(maxProduct([33, 231, 454, 11, 9, 99, 57]));
