//Directions Reduction
//https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

function dirReduc(arr) {
  let i = 0
  while (i < 5) {
    arr = arr
      .join(" ")
      .replace(/(NORTH SOUTH)|(SOUTH NORTH)|(EAST WEST)|(WEST EAST)/g, "")
      .split(" ")
      .filter((i) => i !== "");
    i++
  }
  return arr;
}
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));

//Best Solutions

function dirReduc(arr) {
  var str = arr.join(""),
    pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern, "");
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}