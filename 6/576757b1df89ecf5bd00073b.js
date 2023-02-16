//Build Tower
//https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

function towerBuilder(nFloors) {
  let arr = [];
  let count = nFloors * 2 - 1;
  for (let i = 1; i <= count; i += 2) {
    let str = "*".repeat(i).padStart((count-i)/2 + i, " ");
    arr.push(str.padEnd(count," "));
  }
  return arr;
}

console.log(towerBuilder(7));

//Best Solutions

function towerBuilder(nFloors) {
  let space,
    star,
    tower = [];
  for (i = 1; i <= nFloors; i++) {
    space = " ".repeat(nFloors - i);
    star = "*".repeat(2 * i - 1);
    tower.push(`${space}${star}${space}`);
  }
  return tower;
}