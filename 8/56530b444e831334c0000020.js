//Determine offspring sex based on genes XX and XY chromosomes
//https://www.codewars.com/kata/56530b444e831334c0000020/train/javascript

function chromosomeCheck(sperm) {
  return sperm === "XY"
    ? `Congratulations! You're going to have a son.`
    : `Congratulations! You're going to have a daughter.`;
}

console.log(chromosomeCheck("XY"));

//Best Solutions

function chromosomeCheck(sperm) {
  return `Congratulations! You're going to have a ${
    sperm === "XY" ? "son" : "daughter"
  }.`;
}