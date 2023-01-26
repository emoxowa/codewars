//More Zeros than Ones
//https://www.codewars.com/kata/5d41e16d8bad42002208fe1a/train/javascript

function moreZeros(s) {
  return [...new Set(s)]
    .map((i) => i.charCodeAt().toString(2))
    .filter((i) => + i.replace(/1/g, '').length > Math.floor(i.length / 2))
    .map((i) => String.fromCharCode(parseInt(i, 2)))
}

console.log(moreZeros("abcdeabcde"));
