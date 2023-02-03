//Counting sheep...
//https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((sum, curr) => sum + (curr == true ? 1 : 0), 0);
}