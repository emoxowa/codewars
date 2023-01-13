//first character that repeats
//https://www.codewars.com/kata/54f9f4d7c41722304e000bbb/train/javascript

function firstDup(s) {
  s = s.split('');
  for (let i = 0; i < s.length; i++) {
    if (s.includes(s[i], i + 1)) {
      return s[i];
    }
  } 
}

console.log(firstDup("123123"));

//Best Solutions

function firstDup2(s) {
  return s[s.search(/(.).*\1/)];
}

console.log(firstDup("123123"));