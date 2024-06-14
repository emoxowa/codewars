//Sort Strings by Most Contiguous Vowels
//https://www.codewars.com/kata/5d2d0d34bceae80027bffddb

function sortStringsByVowels(strings) {
  const countMax = (string) =>
    Math.max(...(string.match(/[aeiouAEIOU]+/g) || []).map((i) => i.length));

  return strings.sort((a, b) => countMax(b) - countMax(a));
}

console.log(sortStringsByVowels(["uijijeoj", "lkjlkjww2", "iiutrqy"]));
