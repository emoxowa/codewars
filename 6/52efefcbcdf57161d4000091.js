//Count characters in your string
//https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

function count(string) {
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    obj[string[i]] = obj[string[i]] ? obj[string[i]] + 1 : 1;
  }
  return obj;
}