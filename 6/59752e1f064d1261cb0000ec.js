//Clocky Mc Clock-Face
//https://www.codewars.com/kata/59752e1f064d1261cb0000ec/train/javascript

var whatTimeIsIt = function (angle) {
  let h = 0;

  if (angle < 30) {
    h = 12;
  }
  if (angle >= 30) {
      h = Math.floor(angle / 30) < 10
      ? `0${Math.floor(angle / 30)}`
      : Math.floor(angle / 30);
  }

  m =
    Math.floor((angle % 30) * 2) < 10
      ? `0${Math.floor((angle % 30) * 2)}`
      : Math.floor((angle % 30) * 2);

  return h + ':'+ m ;
};

console.log(whatTimeIsIt(15.2188693573064));


// Best Solutions

var whatTimeIsIt = function (angle) {
  let hour = Math.floor(angle / 30),
    minutes = Math.floor((angle % 30) * 2);
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (hour <= 0) {
    hour = 12;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return hour + ":" + minutes;
};