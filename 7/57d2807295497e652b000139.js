//Averages of numbers
//https://www.codewars.com/kata/57d2807295497e652b000139

function averages(numbers) {
  let result = [];
  if (!numbers || numbers.length < 2) {
    return result;
  }
  for (let i = 0; i < numbers.length - 1; i++) {
    result.push((numbers[i] + numbers[i + 1]) / 2);
  }
  return result;
}

console.log(averages([1, 3, 5, 1, -10]));
