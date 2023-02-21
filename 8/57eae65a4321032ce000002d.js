//Fake Binary
//https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

function fakeBin(x) {
  return x.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1");
}

//Best Solutions

function fakeBin(x) {
  return x.replace(/\d/g, (d) => (d < 5 ? 0 : 1));
}