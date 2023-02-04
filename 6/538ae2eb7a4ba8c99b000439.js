//Evil Autocorrect Prank
//https://www.codewars.com/kata/538ae2eb7a4ba8c99b000439/train/javascript

function autocorrect(input) {
  return input
    .replace(/ you{1,} /gi, " your sister ")
    .replace(/^you{1,} /gi, "your sister ")
    .replace(/ (you{1,}$)|( you{1,}(?=[!.?]))/gi, " your sister")
    .replace(/ u /gi, " your sister ")
    .replace(/ u$/g, " your sister")
    .replace(/^u /g, "your sister ");
}


console.log(
  autocorrect("you I want to film the bayou with you and put it on youtube")
);

//Best Solutions

function autocorrect(input) {
  return input.replace(/\b(you+|u)\b/gi, "your sister");
}