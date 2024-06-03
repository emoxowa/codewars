//The old switcheroo
//https://docs.google.com/spreadsheets/d/1X64j0BAcGQYcLlmrpNGGCaNtxExBLbajEJLBc7cGTxw/edit#gid=0

function vowel2index(str) {
  return [...str].map((el, i) => (/[aeiou]/.test(el.toLowerCase()) ? i + 1 : el)).join("");
}

function vowel2index(str) {
  return str.replace(/[aeiou]/gi, (m, i) => i + 1);
}

console.log(vowel2index("this is my string"));
