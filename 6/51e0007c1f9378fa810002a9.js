//Make the Deadfish Swim
//https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/javascript

function parse(data) {
  let number = 0;
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] == "i") {
      number++;
    }
    if (data[i] == "d") {
      number--;
    }
    if (data[i] == "s") {
      number = number ** 2;
    }
    if (data[i] == "o") {
      result.push(number);
    }
  }
  return result;
}

//Best Solutions

function parse(data) {
  let res = [];

  data.split("").reduce((cur, s) => {
    if (s === "i") cur++;
    if (s === "d") cur--;
    if (s === "s") cur = Math.pow(cur, 2);
    if (s === "o") res.push(cur);

    return cur;
  }, 0);

  return res;
}