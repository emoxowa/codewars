//Count the smiley faces!
//https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

function countSmileys(arr) {
  let count = arr.join("").match(/([;:]|(:-)|(;-)|(:~)|(;~))(?=[)D])/g) || 0;
  return count.length || count;
}

console.log(countSmileys([":-", ":", ";", ":O", ":;"]));

//Best Solutions

function countSmileys(arr) {
  return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length;
}