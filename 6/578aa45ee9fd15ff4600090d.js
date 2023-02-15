//Sort the odd
//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortArray(array) {
  let arr = array.filter(i => i & 1).sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] & 1) {
      array[i] = arr[count];
      count++;
    } 
  }
  return array;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));