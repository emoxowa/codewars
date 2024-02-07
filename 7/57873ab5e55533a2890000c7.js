//Correct the time-string
//https://www.codewars.com/kata/57873ab5e55533a2890000c7/train/javascript

function timeCorrect(timestring) {
  if (timestring === null || timestring === "") {
    return timestring;
  }
  let [hours, minutes, seconds] = timestring.split(":").map(Number);

  if (
    !Number.isInteger(hours) ||
    !Number.isInteger(minutes) ||
    !Number.isInteger(seconds)
  ) {
    return null;
  }

  minutes += Math.floor(seconds / 60);
  seconds %= 60;

  hours += Math.floor(minutes / 60);
  minutes %= 60;

  hours %= 24;

  console.log(hours);

  const format = (time) => time.toString().padStart(2, "0");

  return `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}
