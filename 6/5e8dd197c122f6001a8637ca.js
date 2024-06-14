//Duplicates. Duplicates Everywhere.
//https://www.codewars.com/kata/5e8dd197c122f6001a8637ca

const removeDuplicateIds = (obj) => {
  let unique = [];
  for (const key of Object.keys(obj).reverse()) {
    obj[key] = [...new Set(obj[key])].filter((el) => !unique.includes(el));
    unique = unique.concat(obj[key]);
  }
  return obj;
};

console.log(
  removeDuplicateIds({
    '11': ["P", "R", "S", "D"],
    '53': ["B", "C"],
    '236': ["L", "X", "G", "H"],
    '432': ["A", "B", "D"],
  })
);
