//https://www.codewars.com/kata/664b9dd610985cc3b6784111
//All Nines

function allNines(x) {
  if (!(x % 5n) || !(x % 2n)) return -1n;

  for (let i = 9n; ; i = i * 10n + 9n) if (!(i % x)) return i / x;
}

console.log(allNines(13n));
