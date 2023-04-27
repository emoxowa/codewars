//Find the missing term in an Arithmetic Progression
//https://www.codewars.com/kata/52de553ebb55d1fca3000371/train/javascript

var findMissing = function (list) {
  let step = Math.min(Math.abs(list[1] - list[0]), Math.abs(list[2] - list[1]));
  for (let i = 0; i < list.length; i++) {
    if (Math.abs(list[i + 1] - list[i]) > step) {
      return list[i + 1] < 0 ? list[i] - step : list[i] + step;
    }
  }
};

console.log(findMissing([-1, -17, -25]));