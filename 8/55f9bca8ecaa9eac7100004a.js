//Beginner Series #2 Clock
//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

function past(h, m, s) {
  return 1000*(h * 3600 + m * 60 + s);
}

console.log(past(1, 1, 1));