//The Hashtag Generator
//https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function generateHashtag(str) {
  str = str.replace(/\b[a-z]+\b/gi, (a) => a[0] = a[0].toUpperCase() + a.slice(1)).replace(/ +/g, '');
  return (str.length > 0) & (str.length < 141) ? `#${str}` : false;
}

console.log(generateHashtag(" Hello there thanks for trying my Kata"));