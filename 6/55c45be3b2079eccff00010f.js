//Your order, please
//https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

function order(words) {
  let obj = {};
  words = words.split(" ");
  for (let i = 0; i < words.length; i++) {
    obj[+words[i].match(/\d/g)] = words[i];
  }
  obj = Object.fromEntries(Object.entries(obj).sort())
  return Object.values(obj).join(' ');
}

console.log(order("is2 Thi1s T4est 3a"));

//Best Solutions

function order(words) {
  return words
    .split(" ")
    .sort((a, b) => a.replace(/[^\d]/g, "") - b.replace(/[^\d]/g, ""))
    .join(" ");
}

function order(words) {
  return words
    .split(" ")
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}    
