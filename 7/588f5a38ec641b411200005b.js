//Difference between years. (Level 1)
//https://www.codewars.com/kata/588f5a38ec641b411200005b

var howManyYears = function (date1, date2) {
  return Math.abs(date2.split('/')[0] - date1.split('/')[0]);
};

console.log(howManyYears("1997/10/10", "2015/10/10"));