//WeIrD StRiNg CaSe
//https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript

function toWeirdCase(string) {
  return string
    .split(" ")
    .map((i) =>
      i
        .split("")
        .map((i, index) => (index % 2 === 0 ? i.toUpperCase() : i))
        .join("")
    )
    .join(" ");
}

//Best Solutions

const toWeirdCase = (string) =>
  string
    .toUpperCase()
    .replace(/\w{2}/g, (val) => val[0] + val[1].toLowerCase());