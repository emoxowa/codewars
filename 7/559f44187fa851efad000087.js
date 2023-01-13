//SevenAte9
//https://www.codewars.com/kata/559f44187fa851efad000087/train/javascript


function sevenAte9(str) {
  return str.replace(/797/g, "77").replace(/797/g, "77");
}

console.log(sevenAte9("165561786121789797"));

//Best solutions 
function sevenAte9(str) {
  while (str.includes("797")) {
    str = str.replaceAll("797", "77");
  }
  return str;
}

function sevenAte9(str) {
  return str.replace(/79(?=7)/g, "7");
}