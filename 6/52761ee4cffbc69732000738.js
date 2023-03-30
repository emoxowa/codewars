//Good vs Evil
//https://www.codewars.com/kata/52761ee4cffbc69732000738/train/javascript

function goodVsEvil(good, evil) {
  function getWorth(side, worth)  {
    return side.split(" ").reduce((sum, curr, index) => sum + worth[index] * curr, 0);
  };

  const result =
    getWorth(good, [1, 2, 3, 3, 4, 10]) -
    getWorth(evil, [1, 2, 2, 2, 3, 5, 10]);

  return result > 0
    ? "Battle Result: Good triumphs over Evil"
    : result < 0
    ? "Battle Result: Evil eradicates all trace of Good"
    : "Battle Result: No victor on this battle field";
}

console.log(goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1"));