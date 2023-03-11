//Josephus Permutation
//https://www.codewars.com/kata/5550d638a99ddb113e0000a2/train/javascript

function josephus(items, k) {
  var arr = [];
  let i = 0;
  while (items.length > 0) {
    let p = items.splice((i = (i + k - 1) % items.length), 1)[0];
    arr.push(p);
  }

  return arr;
}

console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));

