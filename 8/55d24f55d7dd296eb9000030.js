//Grasshopper - Summation
//https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript

var summation = function (num) {
  if (num == 1) {
    return 1;
  }
  return num + summation(num - 1);
};

//Best Solutions

function summation(num) {
  return (num * (num + 1)) / 2;
}