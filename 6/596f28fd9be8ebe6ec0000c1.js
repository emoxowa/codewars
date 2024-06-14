//Wave Sorting
//https://www.codewars.com/kata/596f28fd9be8ebe6ec0000c1

function waveSort(arr) {
  let sort = [...arr].sort((a, b) => a - b);
  arr.forEach((_, i) => {
    arr[i] = i % 2 === 0 ? sort.pop() : sort.shift();
  });
}

let a = [1, 2, 4, 3];



console.log(a);

waveSort(a);

console.log(a);