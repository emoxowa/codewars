//Angle Between Clock Hands
//https://www.codewars.com/kata/543ddf69386034670d000c7d/train/javascript

function handAngle(date) {
  let min = date.getMinutes() / 60;
  let h = date.getHours() % 12;
  let a = Math.abs(Math.PI * 2 * ((h + min) / 12 - min));
  return Math.min(a, Math.PI * 2 - a);
}
