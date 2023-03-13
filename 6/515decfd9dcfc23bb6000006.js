//IP Validation
//https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript

function isValidIP(str) {
  let arr = str.split(".");
  if (arr.length < 4 || arr.length > 4) {
    return false;
  }
  return arr.every((i) => +i >= 0 && +i <= 255 && i.length === String(+i).length);
}

console.log(isValidIP("01.02.03.04"));

