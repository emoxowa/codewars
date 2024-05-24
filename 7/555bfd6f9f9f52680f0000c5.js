//Reverse a Number
//https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5

function reverseNumber(n) {
  return (
    (n < 0 ? -1 : 1) * Number(String(Math.abs(n)).split("").reverse().join(""))
  );
}

console.log(reverseNumber(-123));
