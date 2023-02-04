//RGB To Hex Conversion
//https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

function rgb(r, g, b) {
  let arr = [r, g, b].map((i) => i < 0 ? 0 : i > 255 ? 255 : i);
  return arr
    .map((i) => (i < 16 ? `0${i.toString(16)}` : i.toString(16)))
    .join("")
    .toUpperCase();
}

console.log(rgb(203, 55, 14));