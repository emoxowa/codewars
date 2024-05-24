//Greet Me
//https://www.codewars.com/kata/535474308bb336c9980006f2

function greet(name) {
  return `Hello ${name.slice(0, 1).toUpperCase()}${name
    .slice(1)
    .toLowerCase()}!`;
};

console.log(greet('anna'));