//https://www.codewars.com/kata/564e7fc20f0b53eb02000106/train/javascript
//Count consonants

function consonantCount(str) {
  return str.replace(/[^a-z]|[aeiou]/gi, "").length;
}

console.log(consonantCount("h^$&^#$&^elLo world"));

//Возвращаем число (задать count)
//Проверем наличие гласных и вычитаем из длины строки