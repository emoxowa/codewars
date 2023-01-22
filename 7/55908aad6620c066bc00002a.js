//Exes and Ohs
//https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

function XO(str) {
  let countX = str.match(/(x)/gi) || [];
  let countO = str.match(/(o)/gi) || [];
  return countX.length == countO.length;
}

console.log(XO("Oo"));

//Best Solutions

function XO(str) {
  var a = str.replace(/x/gi, ""),
    b = str.replace(/o/gi, "");
  return a.length === b.length;
}