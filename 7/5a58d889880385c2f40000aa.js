//Automorphic Number (Special Numbers Series #6)
//https://docs.google.com/spreadsheets/d/1X64j0BAcGQYcLlmrpNGGCaNtxExBLbajEJLBc7cGTxw/edit#gid=0

function automorphic(n) {
  return +String(n ** 2).slice(-String(n).length) === n
    ? "Automorphic"
    : "Not!!";
}

const automorphic = (n) => (`${n ** 2}`.endsWith(n) ? `Automorphic` : `Not!!`);

console.log(automorphic(25));