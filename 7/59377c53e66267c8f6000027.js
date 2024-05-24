//Alphabet war
//https://www.codewars.com/kata/59377c53e66267c8f6000027

function alphabetWar(fight) {
  const left = ['s', 'b', 'p', 'w'];
  const right = ['z', 'd', 'q', 'm'];
  let countLeft = 0;
  let countRight = 0;
  for (let i = 0; i < fight.length; i++) {
    if (left.includes(fight[i])) {
      countLeft += left.indexOf(fight[i]) + 1;
    } else if (right.includes(fight[i])) {
      countRight += right.indexOf(fight[i]) + 1;
    }
  }

  return countLeft > countRight
    ? "Left side wins!"
    : countLeft === countRight
    ? "Let's fight again!"
    : "Right side wins!";
}

console.log(alphabetWar("zdqmwpbs"));