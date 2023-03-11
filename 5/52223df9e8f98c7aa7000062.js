//ROT13
//https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/javascript

function rot13(str) {
  return str.replace(/[a-z]/gi, (a) =>
    (a < 'N' || (a >= 'a' && a < 'n'))
      ? a = String.fromCharCode(a.charCodeAt() + 13)
      : a = String.fromCharCode(a.charCodeAt() - 13)
  )
}


console.log(rot13("@[`{"));