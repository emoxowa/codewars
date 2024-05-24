//Most digits
//https://www.codewars.com/kata/58daa7617332e59593000006

function findLongest(array) {
  return array.reduce(
    (acc, curr) => (String(curr).length > String(acc).length ? curr : acc)
  );
}

console.log(findLongest([1, 10, 100]));
