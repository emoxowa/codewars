//Alphabetized
//https://www.codewars.com/kata/5970df092ef474680a0000c9

function alphabetized(s) {
  return [...s.replace(/[^a-z]/gi, "")]
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .join("");
}

console.log(alphabetized("The Holy _Bible"));
