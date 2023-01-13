//Fruit Machine
//https://www.codewars.com/kata/590adadea658017d90000039/train/javascript

function fruit(reels, spins) {
  let amount = ["Jack", "Queen", "King", "Bar", "Cherry", "Seven", "Shell", "Bell", "Star", "Wild"];
  let arr = [reels[0][spins[0]], reels[1][spins[1]], reels[2][spins[2]]].sort();
  if (arr.every(i => i == arr[0])) {
    return 10 * (amount.findIndex(i => i == arr[0]) + 1);
  } else if (arr[0] == arr[1] && arr[2] == "Wild") {
    return 2 * (amount.findIndex((i) => i == arr[0]) + 1);
  } else if (arr[0] == arr[1] || arr[1] == arr[2]) {
    return amount.findIndex((i) => i == arr[1]) + 1;
  } else return 0;
}


let spins = [0, 5, 0];
let reels = [
  [
    "King",
    "Jack",
    "Wild",
    "Bell",
    "Star",
    "Seven",
    "Queen",
    "Cherry",
    "Shell",
    "Bar",
  ],
  [
    "Star",
    "Bar",
    "Jack",
    "Seven",
    "Queen",
    "Wild",
    "King",
    "Bell",
    "Cherry",
    "Shell",
  ],
  [
    "King",
    "Bell",
    "Jack",
    "Shell",
    "Star",
    "Cherry",
    "Queen",
    "Bar",
    "Wild",
    "Seven",
  ],
];

console.log(fruit(reels, spins));
