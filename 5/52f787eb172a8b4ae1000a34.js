//Number of trailing zeros of N!
//https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript

function zeros(n) {
  let count = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
};

console.log(zeros(6));


