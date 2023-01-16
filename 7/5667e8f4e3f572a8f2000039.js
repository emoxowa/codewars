//Mumbling
//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(s) {
  return s.replace(/./g, (a, b) => a = a.toUpperCase()+a.repeat(b).toLowerCase()+'-').slice(0, -1);
}

console.log(accum("ZpglnRxqenU"));