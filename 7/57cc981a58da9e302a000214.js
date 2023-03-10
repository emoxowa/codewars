//Small enough? - Beginner
//https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript

function smallEnough(a, limit) {
  return a.every((i) => i <= limit);
}

//Best Solutions
function smallEnough(a, limit) {
  return Math.max(...a) <= limit;
}