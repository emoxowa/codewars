//Holiday VI - Shark Pontoon
//https://www.codewars.com/kata/57e921d8b36340f1fd000059/train/javascript

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  let myTime = pontoonDistance / youSpeed;
  if (dolphin) sharkSpeed = sharkSpeed / 2;
  let sharkTime = sharkDistance / sharkSpeed;
  return myTime < sharkTime ? "Alive!" : "Shark Bait!";
}

console.log(shark(12, 50, 4, 8, true));

// V = S/t => t = S/V