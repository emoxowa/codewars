//The Office I - Outed
//https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/train/javascript

function outed(meet, boss) {
  let arr = Object.values(meet);
  return (arr.reduce((sum, curr) => sum + curr, 0) + meet[boss]) / arr.length <= 5
    ? "Get Out Now!"
    : "Nice Work Champ!";
}