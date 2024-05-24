//Switcheroo
//https://www.codewars.com/kata/57f759bb664021a30300007d

function switcheroo(x) {
  return x
    .split("")
    .map((item) => (item === "a" ? "b" : item === "b" ? "a" : "c"))
    .join("");
}

const switcheroo = (x) => x.replace(/[ab]/g, (x) => (x == "a" ? "b" : "a"));

console.log(switcheroo("aaabcccbaaa"));
