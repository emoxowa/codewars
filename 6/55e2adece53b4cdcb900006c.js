//Tortoise racing
//https://www.codewars.com/kata/55e2adece53b4cdcb900006c/train/javascript

function race(v1, v2, g) {
  let seconds = Math.floor(g / (v2 - v1) * 3600);
  let h = Math.floor(seconds / 3600);
  let m = Math.floor((seconds - h * 3600) / 60);
  let s = seconds - h * 3600 - m * 60;
  return v2 < v1 ? null : [h, m, s];
}

console.log(race(720, 850, 70));