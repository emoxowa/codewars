//Predict your age!
//https://www.codewars.com/kata/5aff237c578a14752d0035ae

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let result = [...arguments]
    .map((item) => item * item)
    .reduce((acc, curr) => acc + curr, 0);
  return Math.floor(Math.sqrt(result)/2);
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));
