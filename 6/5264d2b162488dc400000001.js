//Stop gninnipS My sdroW!
//https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(string) {
  return string
    .split(" ")
    .map((item) => (item.length > 4 ? item.split("").reverse().join("") : item))
    .join(" ");
}

//Разбить на массив
// Проверить кол-во букв
//reverce

console.log(spinWords("Hey fellow warriors"));

//Best Solutions

function spinWords(string) {
  return string.replace(/\w{5,}/g, function (w) {
    return w.split("").reverse().join("");
  });
}