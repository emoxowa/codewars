//Integers: Recreation One
//https://www.codewars.com/kata/55aa075506463dac6600010d/train/javascript

function listSquared(m, n) {
  let arr = [];
  for (let i = m; i <= n; i++) {
    let divisors = [];
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        divisors.push(j);
        if (j !== i / j) {
          divisors.push(i / j);
        }
      }
    }
    let sum = divisors.reduce((sum, curr) => sum + Math.pow(curr,2), 0);
    if (Number.isInteger(Math.sqrt(sum))) {
      arr.push([i, sum]);
    }
  }
  return arr;
}

console.log(listSquared(1, 250));

// Best Solutions

function listSquared(m, n) {
  var arr = [];
  for (var i = m; i <= n; i++) {
    var temp = 0;
    for (var j = 1; j <= i; j++) {
      if (i % j == 0) temp += j * j;
    }
    if (Math.sqrt(temp) % 1 == 0) arr.push([i, temp]);
  }
  return arr;
}
