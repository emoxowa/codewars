//We Have Liftoff
//https://www.codewars.com/kata/53d6387b83db278202000802

function liftoff(instructions) {
  return instructions.sort((a, b) => b - a).join(" ") + " liftoff!";
}

console.log(liftoff([2, 8, 10, 9, 1, 3, 4, 7, 6, 5]));

//"10 9 8 7 6 5 4 3 2 1 liftoff!"
