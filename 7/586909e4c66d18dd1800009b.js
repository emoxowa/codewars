//Currying functions: multiply all elements in an array
//https://www.codewars.com/kata/586909e4c66d18dd1800009b

multiplyAll = (a) => (b) => a.map((i) => i * b);

console.log(multiplyAll([1, 2, 3])(2));
