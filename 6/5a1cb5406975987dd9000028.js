//Sort odd and even numbers in different order
//https://www.codewars.com/kata/5a1cb5406975987dd9000028

function sortArray(array) {
  const even = array.filter((i) => i % 2 === 0).sort((a, b) => b - a);
  const odd = array.filter((i) => i % 2).sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      result.push(even.shift());
    } else {
      result.push(odd.shift());
    }
  }
  return result;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));

//[1, 3, 8, 4, 5, 2]
