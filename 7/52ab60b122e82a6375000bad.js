//Sort Santa's Reindeer
//https://www.codewars.com/kata/52ab60b122e82a6375000bad

function sortReindeer(reindeerNames) {
  const arr = reindeerNames.map((i) => i.split(" ")[1]).sort();
  return reindeerNames.sort(
    (a, b) => arr.indexOf(a.split(" ")[1]) - arr.indexOf(b.split(" ")[1])
  );
}

function sortReindeer(reindeerNames) {
  return reindeerNames.sort((a, b) =>
    a.split(" ")[1].localeCompare(b.split(" ")[1])
  );
}

let input = [
  "Dasher Tonoyan",
  "Dancer Moore",
  "Prancer Chua",
  "Vixen Hall",
  "Comet Karavani",
  "Cupid Foroutan",
  "Donder Jonker",
  "Blitzen Claus",
];
let input1 = ["Kenjiro Mori", "Susumu Mori", "Akira Mori"];

console.log(sortReindeer(input));
