//Digital cypher
//https://www.codewars.com/kata/592e830e043b99888600002d/train/javascript

function encode(str, n) {
  n = String(n);
  return str
    .split("")
    .map((i, id) => (i.charCodeAt(0) - 96 + +n[id % n.length]));
}

console.log(encode("scout", 1939));
