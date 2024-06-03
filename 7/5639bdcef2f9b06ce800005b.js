//Return String of First Characters
//https://www.codewars.com/kata/5639bdcef2f9b06ce800005b

function makeString(s) {
  return s
    .split(" ")
    .map((i) => i[0])
    .join("");
}

function makeString(s) {
  return s.match(/\b\w/g).join("");
}

console.log(makeString("This Is A Test"));
