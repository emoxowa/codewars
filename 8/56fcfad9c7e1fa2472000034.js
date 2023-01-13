//Evil or Odious
//https://www.codewars.com/kata/56fcfad9c7e1fa2472000034/train/javascript

function evil(n) {
  let count = n.toString(2).replace(/0/g, "").length;
  return count & 1 ? "It's Odious!" : "It's Evil!";
}

console.log(evil(3));
