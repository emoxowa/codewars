//Is my friend cheating?
//https://www.codewars.com/kata/5547cc7dcad755e480000004/train/javascript

function removeNb(n) {
  let arr = [];
  let result = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let ar = [...arr];
      let a = ar.splice(i, 1);
      let b = ar.splice(j, 1);
      if (a * b == ar.reduce((sum, curr) => sum + curr, 0)) {
        result.push([a, b].flat());
      }
    }
  }
  return result;
}

console.log(removeNb(26));

function removeNb2(n) {
  let result = [];
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      if (a * b == (n * (n + 1)) / 2 - (a + b)) {
        result.push([a, b]);
      }
    }
  }

  return result;
}

console.log(removeNb2(26));