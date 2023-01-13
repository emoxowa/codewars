//Clock in Mirror
//https://www.codewars.com/kata/56548dad6dae7b8756000037/train/javascript

let WhatIsTheTime = t => {
  let [h, m] = t.split(':');
  h = (+m ? 11 : 12) - h % 12 || 12;
  m = (60 - m) % 60;
  return [h, m].map(e => e > 9 ? e : '0' + e).join(':');
}

console.log(WhatIsTheTime("06:35"));
