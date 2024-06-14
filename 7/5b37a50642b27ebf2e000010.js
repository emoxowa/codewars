//Sum of a Beach
//https://www.codewars.com/kata/5b37a50642b27ebf2e000010

function sumOfABeach(beach) {
  return (beach.match(/(water|sand|fish|sun)/gi) || []).length;
}

console.log(sumOfABeach(''));
