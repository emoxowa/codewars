//Password maker
//https://www.codewars.com/kata/5637b03c6be7e01d99000046

function makePassword(phrase) {
  return phrase
    .split(" ")
    .map((i) => i[0])
    .join("")
    .replace(/o/gi, 0)
    .replace(/i/gi, 1)
    .replace(/s/gi, 5);
}

console.log(makePassword("Give me liberty or give me death"));
