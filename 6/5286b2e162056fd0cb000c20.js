//Collatz
//https://www.codewars.com/kata/5286b2e162056fd0cb000c20/train/javascript

// Print the collatz sequence starting with positive integer n.
// Ex: collatz(4) should return "4->2->1"
function collatz(n){
  let arr = [n];
  while (n > 1) {
    n % 2 ? n = (3 * n + 1) : n = (n / 2);
    arr.push('->' + n);
  }
  return arr.join('');
}

console.log(collatz(3));

//Best Solutions 
function collatz(n) {
  if (n === 1) return "1";
  return n + "->" + collatz(n % 2 === 0 ? n / 2 : 3 * n + 1);
}