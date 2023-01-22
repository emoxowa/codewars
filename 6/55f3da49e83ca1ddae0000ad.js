//Tank Truck
//https://www.codewars.com/kata/55f3da49e83ca1ddae0000ad/train/javascript

function tankvol(h, d, vt) {
  let r = d / 2; 
  let n = 2 * Math.acos(1 - h/r);
  return Math.floor((vt * (n - Math.sin(n))) / (Math.PI * 2));
}

console.log(tankvol(2, 7, 3848));

//vt(n - sin(n) / 2*pi

