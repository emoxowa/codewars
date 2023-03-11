//Rectangle into Squares
//https://www.codewars.com/kata/55466989aeecab5aac00003e/train/javascript

function sqInRect(lng, wdth) {
  if (lng === wdth) {
    return null;
  }
  let arr = [];
  while (lng > 0 && wdth > 0) {
    let min = Math.min(lng, wdth);
    let max = Math.max(lng, wdth);
    arr.push(min);
    (lng == max) ? lng = lng - min : wdth = wdth - min;
  }
  return arr;
}