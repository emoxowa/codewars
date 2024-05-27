//Basic Sequence Practice
//https://www.codewars.com/kata/5436f26c4e3d6c40e5000282/train/javascript

function sumOfN(n) {
  let result = [0];

  for (let i = 0; i < (n < 0 ? -n: n); i++) {
    result.push(result[i] + i + 1);
  }
  return n < 0 ? result.map((i) => i * -1) : result;
}

console.log(sumOfN(3));

//0+
//0+1
//0+1+2
