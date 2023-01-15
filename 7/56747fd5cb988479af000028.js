//Get the Middle Character
//https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s) {
  return s.length % 2
    ? s[Math.floor(s.length / 2)]
    : s.substr(s.length / 2 - 1, 2);
}

console.log(getMiddle("jopa"));