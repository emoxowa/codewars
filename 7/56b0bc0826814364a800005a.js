//Cyclops numbers
//https://www.codewars.com/kata/56b0bc0826814364a800005a/train/javascript

function cyclops(n) {
  let bin = n.toString(2);
  if (bin.length % 2 == 0) {
    return false;
  } else if (
    Array.from(bin, Number).findIndex((i) => i == 0) == Math.floor(bin.length / 2) &&
    Array.from(bin, Number).filter(i  => i == 0).length == 1 
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(cyclops(5));


//Best Solutions

function cyclops(n) {
  let binary = n.toString(2).split("0");
  return binary.length == 2 && binary[0] == binary[1];
}