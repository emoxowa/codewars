//Bouncing Balls
//https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript

function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) {
    return -1;
  }
  let count = 0;
  while (h > window) {
    h *= bounce;
    if (h <= window) {
      count++;
    } else {
      count += 2;
    }
  }
  return count;
}

console.log(bouncingBall(2, 0.5, 1));

