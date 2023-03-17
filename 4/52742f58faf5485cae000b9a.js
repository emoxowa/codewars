//Human readable duration format
//https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

function formatDuration(seconds) {
  if (seconds == 0) { return 'now' };
  let s = parseInt(seconds % 60);
  let m = parseInt(seconds / 60 % 60);
  let h = parseInt(seconds / 3600 % 24);
  let d = parseInt(seconds / (3600*24) % 365);
  let y = parseInt(seconds / (3600 * 24 * 365));
  let arr = [
    `${y == 0 || (seconds > 0 && seconds < 60) ? "" : y == 1 ? y + " year" : y + " years"}`,
    `${d == 0 ? "" : d == 1 ? d + " day" : d + " days"}`,
    `${h == 0 ? "" : h == 1 ? h + " hour" : h + " hours"}`,
    `${m == 0 ? "" : m == 1 ? m + " minute" : m + " minutes"}`,
    `${s == 0 ? "" : s == 1 ? s + " second" : s + " seconds"}`,
  ];
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr.length == 1 ? arr.join() : arr.map((i, index) => index == arr.length-2 ? i : index == arr.length-1 ? ' and '+i: i+', ').join('');
}

console.log(formatDuration(205851834));

