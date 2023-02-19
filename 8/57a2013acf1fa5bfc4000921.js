//Calculate average
//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

function findAverage(array) {
  return array.reduce((sum, curr) => sum + curr, 0) / array.length || 0;
}