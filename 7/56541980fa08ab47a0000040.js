//Printer Errors
//https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript

function printerError(s) {
  let errors = s.length - s.replace(/[n-z]/gi, "").length;
  return `${errors}/${s.length}`;
}

//Best Solutions

const printerError = (s) => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

var printerError = (s) => (s.match(/[n-z]/g) || []).length + "/" + s.length;