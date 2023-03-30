//Are the numbers in order?
//https://www.codewars.com/kata/56b7f2f3f18876033f000307/train/javascript

function inAscOrder(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) {
      return false;
    }
  }
  return true;
}