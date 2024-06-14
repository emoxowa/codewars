//Replace all items
//https://www.codewars.com/kata/57ae18c6e298a7a6d5000c7a

function replaceAll(seq, find, replace) {
  return Array.isArray(seq)
    ? seq.map((i) => (i === find ? replace : i))
    : seq.replaceAll(find, replace);
}

console.log(replaceAll('1234', 1, 2));
