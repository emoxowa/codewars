//Help the Fruit Guy
//https://www.codewars.com/kata/557af4c6169ac832300000ba/train/javascript

function removeRotten(bagOfFruits) {
  if (bagOfFruits === null || bagOfFruits === undefined) return [];
  for (let i = 0; i < bagOfFruits.length; i++) {
    if (bagOfFruits[i].startsWith("rotten"))
      bagOfFruits[i] = bagOfFruits[i].replace("rotten", "").toLowerCase();
  }
  return bagOfFruits;
}

console.log(removeRotten(["apple", "rottenBanana", "apple"]));

//Best Solutions

function removeRotten(arr) {
  return arr ? arr.map((x) => x.replace("rotten", "").toLowerCase()) : [];
}
