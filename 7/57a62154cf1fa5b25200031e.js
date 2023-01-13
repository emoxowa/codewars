//Alternate case
//https://www.codewars.com/kata/57a62154cf1fa5b25200031e/train/javascript

function alternateCase(s) {
  s = s.split('');
  return s.map((i) => i == i.toUpperCase()? i.toLowerCase(): i.toUpperCase() ).join('');
}

console.log(alternateCase("Hello World"));

//Best Solutions 
const alternateCase = (s) =>
  s.replace(/\w/g, (val) => val[`to${val < `a` ? `Low` : `Upp`}erCase`]());


function alternateCase(s) {
  return s.replace(/([a-z])|[A-Z]/g, (a, b) =>
    b ? a.toUpperCase() : a.toLowerCase()
  );
}