//Counting Duplicates
//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text) {
  text = text.toLowerCase();
  let obj = {};
  for (let i = 0; i < text.length; i++) {
    obj[text[i]] = obj[text[i]]
      ? obj[text[i]] + 1
      : 1;
  }
  return Object.values(obj).filter((i)=> i > 1).length;
}

console.log(duplicateCount("aabBcde"));

//Best Solutions

function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}