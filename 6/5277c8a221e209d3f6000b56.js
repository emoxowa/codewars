//Valid Braces
//https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript

function validBraces(braces) {
  while (/\(\)|\[\]|\{\}/g.test(braces)) {
    braces = braces.replace(/\(\)|\[\]|\{\}/g, "");
  }
  return !braces.length;
}

console.log(validBraces("((()){}[]"));