//Complementary DNA
//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function DNAStrand(dna) {
  let obj = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  }
  return dna.replace(/./g, (i) => obj[i]);
}

console.log(DNAStrand("ATTGC"));