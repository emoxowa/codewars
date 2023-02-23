//Beginner - Reduce but Grow
//https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

function grow(x) {
  return x.reduce((sum, curr) => sum * curr);
}