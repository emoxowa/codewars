//Fuel Calculator: Total Cost
//https://www.codewars.com/kata/57b58827d2a31c57720012e8/train/javascript

function fuelPrice(litres, pricePerLitre) {
  if (litres <= 3) {
    return +((litres * (100 * pricePerLitre - 5)) / 100).toFixed(2);
  }
  if (litres <= 5) {
    return +((litres * (100 * pricePerLitre - 10)) / 100).toFixed(2);
  }
  if (litres <= 7) {
    return +((litres * (100 * pricePerLitre - 15)) / 100).toFixed(2);
  }
  if (litres <= 9) {
    return +((litres * (100 * pricePerLitre - 20)) / 100).toFixed(2);
  } else {
    return +((litres * (100 * pricePerLitre - 25)) / 100).toFixed(2);
  }
}

console.log(fuelPrice(5, 1.23));