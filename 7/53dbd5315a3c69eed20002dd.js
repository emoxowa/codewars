//List Filtering
//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

function filter_list(l) {
  return l.filter((item) => typeof item === 'number');
}

console.log(filter_list([1, 2, "a", "b"]));
