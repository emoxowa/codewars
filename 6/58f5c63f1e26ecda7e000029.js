//Mexican Wave
//https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

function wave(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      continue;
    }
    arr.push(str.substr(str[i - 1], i) + str[i].toUpperCase() + str.slice(i + 1));
  }
  return arr;
}