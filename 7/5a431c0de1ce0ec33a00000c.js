//Even numbers in an array
//https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c

function evenNumbers(array, number) {
  return array
    .filter((item) => item % 2 === 0)
    .slice(-number)
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
