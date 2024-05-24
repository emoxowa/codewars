//esreveR
//https://www.codewars.com/kata/5413759479ba273f8100003d

reverse = function (array) {
  return array.map((c, i) => array[array.length - 1 - i]);
};

console.log(reverse([1,null,14,"two"]));