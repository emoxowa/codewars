//Extract the domain name from a URL
//https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

function domainName(url) {
  return url.replace(/https|http|www/g, '').match(/([a-z,0-9,-]{1,})/gi)[0];
}

console.log(domainName("https://www.u2ai1r--g0qj2t3693get5.br/default.html"));