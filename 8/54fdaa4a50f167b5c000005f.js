//Unexpected parsing
//https://www.codewars.com/kata/54fdaa4a50f167b5c000005f/train/javascript

function getStatus(isBusy) {
  var msg = isBusy ? "busy" : "available";
  return {
    status: msg
  }
}