//Color Ghost
//https://www.codewars.com/kata/53f1015fa9fe02cbda00111a/train/javascript

var Ghost = function () {
  let colors = ["white", "yellow", "purple", "red"];
  return (this.color = colors[Math.floor(Math.random() * 10) % colors.length]);
};

let ghost = new Ghost();

console.log(ghost.color);