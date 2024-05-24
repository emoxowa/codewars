//Deodorant Evaporator
//https://www.codewars.com/kata/5506b230a11c0aeab3000c1f

function evaporator(content, evap_per_day, threshold) {
  let current = 100;
  let days = 0;
  while (current >= threshold) {
    current -= (current * evap_per_day) / 100;
    days++;
  }
  return days;
}

console.log(evaporator(10, 10, 5));
