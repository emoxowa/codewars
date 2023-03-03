//int32 to IPv4
//https://www.codewars.com/kata/52e88b39ffb6ac53a400022e/train/javascript

function int32ToIp(int32) {
  let a = (int32 >>> 24) & 255;
  let b = (int32 >>> 16) & 255;
  let c = (int32 >>> 8) & 255;
  let d = int32 & 255;
  return `${a}.${b}.${c}.${d}`;
}

console.log(int32ToIp("2149583361"));

