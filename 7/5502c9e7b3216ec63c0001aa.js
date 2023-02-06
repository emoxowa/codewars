//Categorize New Member
//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

function openOrSenior(data) {
  return data.map((i) => (i[0] > 54 && i[1] > 7 ? "Senior" : "Open"));
}