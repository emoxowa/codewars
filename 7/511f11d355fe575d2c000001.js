//Two Oldest Ages
//https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript

function twoOldestAges(ages) {
  return ages
    .sort((a, b) => b - a)
    .splice(0, 2)
    .sort((a, b) => a - b);
}
console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));

//Best Solutions

function twoOldestAges(ages){
  return ages.sort((a,b) => a-b).slice(-2);
}