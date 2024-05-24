//Balanced Number (Special Numbers Series #1 )
//https://www.codewars.com/kata/5a4e3782880385ba68000018

function balancedNum(number) {
  const arr = [...(number += "")].map((i) => +i);
  const length = Math.floor((arr.length - 1) / 2);
  const leftPart = arr.slice(0, length).reduce((a, c) => a + c, 0);
  const rightPart = arr.slice(-length).reduce((a, c) => a + c, 0);
  return leftPart === rightPart || arr.length < 3 ? "Balanced" : "Not Balanced";
}

console.log(balancedNum(56239814));
