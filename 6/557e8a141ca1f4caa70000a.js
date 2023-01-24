//Triangle number check
//https://www.codewars.com/kata/557e8a141ca1f4caa70000a6/train/javascript

function isTriangleNumber(number) {
  let count = 0;
  for (let i = 0; number > count; i++) {
    count += i;
  }
  return count === number; 
}

console.log(isTriangleNumber(3));

//Best Solutions 

function isTriangleNumber(number) {
  return Math.sqrt(1 + 8 * number) % 1 == 0;
}