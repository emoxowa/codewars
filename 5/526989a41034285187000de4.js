//Count IP Addresses
//https://www.codewars.com/kata/526989a41034285187000de4/train/javascript

function ipsBetween(start, end) {
  function sum(str) {
    let arr = str.split('.');
    let sum = 0;
    let count = 3;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i] * 256 ** count;
      count--;
    }
    return sum;
  }

  return sum(end) - sum(start);
}

console.log(ipsBetween("20.0.0.10", "20.0.1.0"));

