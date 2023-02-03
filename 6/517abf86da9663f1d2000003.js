//Convert string to camel case
//https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

function toCamelCase(str) {
  let newStr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "_" || str[i] === "-") {
      newStr.push(str[i + 1].toUpperCase());
      i++;
    } else {
      newStr.push(str[i]);
    }
  }
  return newStr.join('');
}

//Best Solutions

function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

console.log(toCamelCase("the_stealth_warrior"));