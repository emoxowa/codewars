//Price of Mangoes
//https://www.codewars.com/kata/57a77726bb9944d000000b06/train/javascript

function mango(quantity, price) { 
  return quantity % 3 === 0
    ? (quantity - quantity / 3) * price
    : (quantity - (quantity - (quantity % 3)) / 3) * price;
}

console.log(mango(7, 3));

//Best solutions
function mango(quantity, price) {
  return price * (quantity - Math.floor(quantity / 3));
}