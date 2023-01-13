//Are arrow functions odd?
//https://www.codewars.com/kata/559f80b87fa8512e3e0000f5/train/javascript

function odds(values){
  return values.filter( item => item & 1);
}

console.log(odds([1, 2, 3, 4, 5, 6]));

//Best Solutions

