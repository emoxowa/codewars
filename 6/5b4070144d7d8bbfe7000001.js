//https://www.codewars.com/kata/5b4070144d7d8bbfe7000001/train/javascript
//Numericals of a String

function numericals(s) {
  let arr = [];
  let count;
  for (let i = 0; i < s.length; i++) {  
    count = 1;
    let substr = s.substring(0, i);
    for (let j = 0; j < substr.length; j++) {
      substr[j].includes(s[i]) && count++;
    }
    arr.push(count);
  }
  return arr.join('');
}

console.log(numericals("Hello, World!"));

function numericals2(s) {
  let arr = [];
  let count;
  for (let i = 0; i < s.length; i++) {
    count = 0;
    let substr = s.substring(0, i); //H, He, Hel, Hello
    count = substr.split('').reduce((acc, item) => acc + +`${(item == s[i]) ? 1 : 0}`, 1);
    arr.push(count);
  }
  return arr.join('');
}

console.log(numericals2("Hello, World!"));

//Best Solutions

function numericals3(s) {
  let result = "";
  let chars = {};
  for (let i = 0; i < s.length; i++) {
    chars[s[i]] = chars[s[i]] ? chars[s[i]] + 1 : 1; 
    result += chars[s[i]];
  }
  return result;
}

console.log(numericals2("Hello, World!"));