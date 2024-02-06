//Band name generator
//https://www.codewars.com/kata/59727ff285281a44e3000011/train/javascript

function bandNameGenerator(str) {
  if (str[0] === str[str.length - 1]) {
    return str[0].toUpperCase() + str.slice(1) + str.slice(1);
  } else {
    return `The ${str[0].toUpperCase()}${str.slice(1)}`;
  }
}

console.log(bandNameGenerator("dolphin"));
console.log(bandNameGenerator("alaska"));

console.log("dolphin".slice(-1));