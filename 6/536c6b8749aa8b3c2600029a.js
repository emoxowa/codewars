//A String of Sorts
//https://www.codewars.com/kata/536c6b8749aa8b3c2600029a

function sortString(string, ordering) {
  const ord = [...new Set([...ordering])];
  const part1 = string
    .split("")
    .filter((i) => ord.includes(i))
    .sort((a, b) => ord.indexOf(a) - ord.indexOf(b));
  const part2 = string.split("").filter((i) => !part1.includes(i));
  return part1.join("") + part2.join("");
}

console.log(sortString("foosj", "oofajf"));
