//Scramblies
//https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

function scramble1(str1, str2) {
  let str1Length = str1.length;
  return (
    str2.split("").map((i, index) => {
      if (str1.includes(i)) {
        str1 =
          str1.substring(0, str1.indexOf(i)) + str1.slice(str1.indexOf(i) + 1);
      }
    }).length +
      str1.length ===
    str1Length
  );
}

//Best Solutions

function scramble(str1, str2) {
  let counter = 0;
  str1 = str1.split("");
  str2 = str2.split("");
  let obj2 = {};
  let obj1 = {};
  for (let i = 0; i < str2.length; i++) {
    obj2[str2[i]] = obj2[str2[i]] ? obj2[str2[i]]+1 : 1
  }
  for (let i = 0; i < str1.length; i++) {
    obj1[str1[i]] = obj1[str1[i]] ? obj1[str1[i]] + 1 : 1;
  }
  for (const key in obj2) {
    if (obj1[key] >= obj2[key]) {
      counter += obj2[key];
    }
  }
  return counter === str2.length
}

console.log(scramble("java", "java"));