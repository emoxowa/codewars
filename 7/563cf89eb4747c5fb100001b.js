//Remove the minimum
//https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

function removeSmallest(numbers) {
  const min = Math.min(...numbers);
  const index = numbers.indexOf(min);
  return [...numbers.slice(0, index),...numbers.slice(index+1)];
}

console.log(removeSmallest([1, 2, 3, 4, 5]));