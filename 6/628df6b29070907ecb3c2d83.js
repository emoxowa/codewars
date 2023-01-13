//Chaser's schedule
//https://www.codewars.com/kata/628df6b29070907ecb3c2d83/train/javascript

function solution(s, t) {
  let distance = s * t,
    maxSprints = Math.ceil(t / 2);
  for (let i = 0; i < maxSprints; i++) {
    if (s - 3 * i > 0) {
      distance += s - 3 * i;
    }
  }
  return distance;
}  

console.log(solution(2, 4));

// 2 * 4;
// 2
// 2 > 0 => d += 8 + 2 =10
// 

