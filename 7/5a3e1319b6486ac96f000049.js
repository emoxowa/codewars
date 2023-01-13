//Simple consecutive pairs
//https://www.codewars.com/kata/5a3e1319b6486ac96f000049/train/javascript

function pairs(ar) {
  let count = 0;
  for (let i = 0; i < ar.length; i+=2) {
    if (ar[i] - ar[i + 1] == 1 || ar[i + 1] - ar[i] == 1) {
      count++;
    }
  }
  return count;
};


console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]));

//Best Soilutions

function pairs(array, count = 0) {
  for (let i = 0; i < array.length; i += 2)
    if (Math.abs(array[i] - array[i + 1]) === 1) count += 1;
  return count;
}