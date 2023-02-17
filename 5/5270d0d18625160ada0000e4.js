//Greed is Good
//https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript

function score(dice) {
  let arr = [1000, 200, 300, 400, 500, 600];
  let result = 0;
  let obj = {};
  for (let i = 0; i < dice.length; i++) {
    obj[dice[i]] = obj[dice[i]] ? obj[dice[i]] + 1 : 1;
  }
  for (let key in obj) {
    if (obj[key] % 3 === 0) {
      result += (obj[key]/3) * arr[+key-1];
    }  if (obj[key] < 3 && (key == 1 || key == 5)) {
      result += obj[key] * (arr[+key - 1] / 10);
    } if (obj[key] > 3 && obj[key] % 3) {
      result += arr[+key - 1];
      if (key == 1 || key == 5) {
        result += (obj[key] % 3) * (arr[+key - 1] / 10);
      }
    }
  }
  return result
}

console.log(score([2, 3, 4, 6, 2]));

