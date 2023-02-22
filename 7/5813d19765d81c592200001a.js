//Don't give me five!
//https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript

function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    /5/g.test(String(i)) ? count : count++;
  }
  return count;
}