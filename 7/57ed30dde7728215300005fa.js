//Bumps in the Road
//https://www.codewars.com/kata/57ed30dde7728215300005fa

function bump(x) {
  const result = x
    .split("")
    .reduce((acc, curr) => (curr === "n" ? (acc += 1) : acc), 0);

  return result > 15 ? "Car Dead" : "Woohoo!";
}

const bump = (x) => (x.split("n").length > 16 ? "Car Dead" : "Woohoo!");

function bump(str) {
  return str.replace(/_/g, "").length > 15 ? "Car Dead" : "Woohoo!";
}

console.log(bump("______n___n_"));
