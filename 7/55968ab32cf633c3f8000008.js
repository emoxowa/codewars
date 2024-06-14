//C.Wars
//https://www.codewars.com/kata/55968ab32cf633c3f8000008

function initials(n) {
  return n
    .split(" ")
    .reverse()
    .map((el, i) => el[0].toUpperCase() + (i === 0 ? el.slice(1) : ""))
    .reverse()
    .join(".");
}

console.log(initials("Barack hussain obama"));
