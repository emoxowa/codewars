//Folding your way to the moon
//https://www.codewars.com/kata/58f0ba42e89aa6158400000e/train/javascript

function foldTo(distance) {
  let thickness = 0.0001;
  let res = 0;
  let i = -1;
  if (distance < 0) {
    return null;
  }
  while (distance >= res) {
    i++;
    res = thickness * 2 ** i;
  }
  return i;
}

console.log(foldTo(0));
