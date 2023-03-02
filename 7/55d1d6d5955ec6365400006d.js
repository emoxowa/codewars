//Round up to the next multiple of 5
//https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/javascript

function roundToNext5(n) {
  while (n % 5) {
    n++;
  }
  return n;
}

//Best Solutions

function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}