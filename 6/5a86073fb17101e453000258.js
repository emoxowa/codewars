//Emotional Sort ( ︶︿︶)
//https://www.codewars.com/kata/5a86073fb17101e453000258

function sortEmotions(arr, order) {
  let emotions = [":D", ":)", ":|", ":(", "T_T"];
  return arr.sort((a, b) =>
    order
      ? emotions.indexOf(a) - emotions.indexOf(b)
      : emotions.indexOf(b) - emotions.indexOf(a)
  );
}

console.log(sortEmotions([":D", ":|", ":)", ":(", ":D"], false));