//Find the middle element
//https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

function gimme(triplet) {
  return triplet.indexOf([...triplet].sort((a,b) => a -b)[1]);
}

console.log(gimme([2.1, 3.2, 1.4]));