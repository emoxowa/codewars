//Number of People in the Bus
//https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

var number = function (busStops) {
  return busStops
    .flat()
    .reduce((sum, curr, index) => sum + (index & 1 ? -curr : curr), 0);
};