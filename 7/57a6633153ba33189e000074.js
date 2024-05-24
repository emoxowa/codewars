//Ordered Count of Characters
//https://www.codewars.com/kata/57a6633153ba33189e000074

const orderedCount = function (text) {
  let obj = {};
  for (let i = 0; i < text.length; i++) {
    obj[text[i]] = obj[text[i]] ? obj[text[i]]+1 : 1;
  }
  return obj;
};


console.log(orderedCount("23354312"));
