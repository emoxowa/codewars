//Sequences and Series
//https://www.codewars.com/kata/5254bd1357d59fbbe90001ec/train/javascript

function getScore(n) {
  let res = 0;
  for (let i = 0; i <= n; i++) {
    res += i * 50; 
  }
  return res;
}

console.log(getScore(5));
 

//Best Solutions
function getScore(n) {
  return n * (n + 1) * 25;
}
