//Discover The Original Price
//https://www.codewars.com/kata/552564a82142d701f5001228/train/javascript

function discoverOriginalPrice(discountedPrice, salePercentage) {
  return +(discountedPrice * 100) / (100 - salePercentage).toFixed(2);
}

console.log(discoverOriginalPrice(75.75, 25));