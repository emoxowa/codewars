//62eb800ba29959001c07dfee
//https://www.codewars.com/kata/62eb800ba29959001c07dfee/train/javascript

function brightest(colors) {
  let arr = [];
  for (let i = 0; i < colors.length; i++) {
    colors[i] = colors[i].replace("#", "");
    let max = Math.max(
      parseInt(colors[i].slice(0, 2), 16),
      parseInt(colors[i].slice(2, 4), 16),
      parseInt(colors[i].slice(4, 6), 16)
    );
    arr.push(max);
  }
  return '#'+colors[arr.indexOf(Math.max(...arr))];
}

console.log(brightest(["#00FF00", "#FFFF00", "#01130F"]));