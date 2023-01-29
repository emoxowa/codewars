//Credit Card Mask
//https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

function maskify(cc) {
  return `${cc.slice(0, -4).replace(/./g, '#')}${cc.slice(-4)}`;
}

console.log(maskify("4556364607935616"));

//Best Solutions

function maskify(cc) {
  return cc.replace(/.(?=....)/g, "#");
}

function maskify(cc) {
  return cc.replace(/.(?=.{4})/g, "#");
}

function maskify(cc) {
  return cc.replace(/(?=.{5})./g, "#");
}

function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, "#");
}