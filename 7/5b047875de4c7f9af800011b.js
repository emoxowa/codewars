//String Reordering
//https://www.codewars.com/kata/5b047875de4c7f9af800011b

function sentence(arrayOfObjects) {
  return arrayOfObjects
    .sort((a, b) => Object.keys(a) - Object.keys(b))
    .map((i) => Object.values(i))
    .join(" ");
}

List = [
  { 4: "dog" },
  { 2: "took" },
  { 3: "his" },
  { "-2": "Vatsan" },
  { 5: "for" },
  { 6: "a" },
  { 12: "spin" },
];

console.log(sentence(List));
