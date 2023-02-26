//Which are in?
//https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

function inArray(array1, array2) {
  let arr = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.join(' ').includes(array1[i])) {
      arr.push(array1[i]);
    }
  }
  return arr.sort();
}

console.log(
  inArray(["live", "strong", "arp"], ['lively', "alive", "harp", "sharp", "armstrong"])
);

//Best Solutions

function inArray(array1, array2) {
  return array1.filter((a1) => array2.find((a2) => a2.match(a1))).sort();
}