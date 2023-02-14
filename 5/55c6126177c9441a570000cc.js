//Weight for weight
//https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript

function orderWeight(strng) {
  return strng
    .split(" ")
    .sort()
    .sort((a, b) =>
      a.split("").reduce((sum, curr) => sum + +curr, 0)
      - b.split("").reduce((sum, curr) => sum + +curr, 0))
    .join(' ');
}

console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));

//'11 11 2000 10003 22 123 1234000 44444…'