//Ghostbusters (whitespace removal)
//https://www.codewars.com/kata/5668e3800636a6cd6a000018

function ghostBusters(building) {
  return /[ ]/g.test(building)
    ? building.replaceAll(" ", "")
    : "You just wanted my autograph didn't you?";
}

console.log(ghostBusters("Skyscraper"));
