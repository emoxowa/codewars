//Count the Digit
//https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript

function nbDig(n, d) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    let arr = Array.from(String(Math.pow(i, 2)), Number);
    if (arr.includes(d)) {
      count += arr.filter((i) => i == d).length;
    }
  }
  return count;
}

//Best Solutions

function nbDig1(n, d) {
  var o = "";
  for (var i = 0; i <= n; i++) {
    o += Math.pow(i, 2);
  }
  return o.split(d).length - 1;
}

console.log(nbDig1(25, 1));