//Josephus Survivor
//https://www.codewars.com/kata/555624b601231dc7a400017a/train/javascript

function josephusSurvivor(n, k) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  let i = 0;
  while (arr.length > 1) {
    arr.splice((i = (i + k - 1) % arr.length), 1);
  }
  return arr[0];
}

console.log(josephusSurvivor(7, 3));

//Best Solutions

function josephusSurvivor(n, k) {
  res = 1;
  for (let i = 1; i <= n; i++) {
    res = ((res + k - 1) % i) + 1
  }
  return res;
}