//Divide and Conquer
//https://www.codewars.com/kata/57eaec5608fed543d6000021

function divCon(x) {
  let strSum = x
    .filter((item) => typeof item === "string")
    .reduce((acc, curr) => acc + +curr, 0);
  let numSum = x
    .filter((item) => typeof item === "number")
    .reduce((acc, curr) => acc + curr, 0);
  return numSum - strSum;
}

function divCon(x) {
  return x.reduce(
    (acc, cur) => (typeof cur === "number" ? acc + cur : acc - Number(cur)),
    0
  );
}

console.log(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
