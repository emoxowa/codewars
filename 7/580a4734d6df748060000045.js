//Sorted? yes? no? how?
//https://www.codewars.com/kata/580a4734d6df748060000045

function isSortedAndHow(array) {
  const arrString = array.join("");
  if (arrString == [...array].sort((a, b) => a - b).join("")) {
    return "yes, ascending";
  } else if (arrString == [...array].sort((a, b) => b - a).join("")) {
    return "yes, descending";
  } else {
    return "no";
  }
}

console.log(isSortedAndHow([3, 2, 1, 0]));
