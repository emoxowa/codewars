//Who ate the cookie?
//https://www.codewars.com/kata/55a996e0e8520afab9000055/train/javascript

function cookie(x) {
  let name;
  console.log(typeof x);
  if (typeof x == 'string') {
    name = "Zach";
  } else if (typeof x == "number") {
    name = "Monica";
  } else {
    name = "the dog";
  }
  return `Who ate the last cookie? It was ${name}!`;
}

console.log(cookie('jopa'));

//Best Solutions

function cookie(x) {
  var t = typeof x
  var who = t=="string" ? 'Zach' : t=="number" ? 'Monica' : 'the dog'
  return `Who ate the last cookie? It was ${who}!`
}