//Tip Calculator
//https://www.codewars.com/kata/56598d8076ee7a0759000087/train/javascript

function calculateTip(amount, rating) {
  rating = rating.toLowerCase();
  return  rating == "poor"
    ? Math.ceil(amount * 0.05)
    : rating == "good"
    ? Math.ceil(amount * 0.1)
    : rating == "great"
    ? Math.ceil(amount * 0.15)
    : rating == "excellent"
    ? Math.ceil(amount * 0.2)
    : rating == "terrible"
    ? 0
    : "Rating not recognised";
}

console.log(calculateTip(26.95, "good"));

//Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%