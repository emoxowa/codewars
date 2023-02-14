//Pete, the baker
//https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

function cakes(recipe, available) {
  let obj = {};
  for (let i in recipe) {
    obj[i] = Math.floor(available[i] / recipe[i]) || 0;
  }
  return Math.min(...Object.values(obj));
}

console.log(
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
);