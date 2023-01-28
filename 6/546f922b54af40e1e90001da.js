//Replace With Alphabet Position
//https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

function alphabetPosition(text) {
  return text
    .replace(/[^a-z]/gi, "")
    .replace(/[a-z]/gi, (i) => `${i.toLowerCase().charCodeAt(0) - 96} `)
    .slice(0, -1);
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));