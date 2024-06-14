//Rank Vector
//https://www.codewars.com/kata/545f05676b42a0a195000d95

function ranks(a) {
  const unique = [...a].sort((a, b) => b - a);
  return a.map((i) => unique.indexOf(i) + 1);
}

console.log(ranks([5, 2, 3, 5, 5, 4, 9, 8, 0]));
