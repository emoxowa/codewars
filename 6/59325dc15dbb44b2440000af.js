//Are we alternate?
//https://www.codewars.com/kata/59325dc15dbb44b2440000af/train/javascript

function isAlt(word) {
  return word.replace(/[aeiou]/g, "1").replace(/\D/g, "0").search(/(00)|(11)/g) !== -1 ? false : true ;
}

console.log(isAlt("banana"));

//Best Solutions

function isAlt(word) {
  return !/[aeiou]{2}|[^aeiou]{2}/.test(word);
}

const baseRange = (start, end, step) => {
  let index = -1;
  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
  const result = new Array(length);

  while (length--) {
    result[++index] = start;
    start += step;
  }

  return result;
};

