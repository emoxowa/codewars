//Sort deck of cards
//https://www.codewars.com/kata/56f399b59821793533000683/train/javascript

function sortCards(array) {
  const sort = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
  ];
  return array.sort((a, b) => sort.indexOf(`${a}`) - sort.indexOf(`${b}`));
}

console.log(sortCards([3, 9, "A", 5, "T", 8, 2, 4, "Q", 7, "J", 6, "K"]));
