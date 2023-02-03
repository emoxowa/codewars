//Human Readable Time
//https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

function humanReadable(seconds) {
  let ss = seconds % 60;
  let mm = parseInt((seconds / 60) % 60);
  let hh = Math.floor(seconds / 3600);
  return `${hh < 10 ? `0${hh}` : hh}:${mm < 10 ? `0${mm}` : mm}:${ss < 10 ? `0${ss}` : ss}`;
}

console.log(humanReadable(90));

//Best Solutions

function humanReadable2(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}

console.log(parseInt(90 / (3600)));
console.log(parseInt(90 / 60 % 60 ));
console.log(parseInt(90 % 60 ));