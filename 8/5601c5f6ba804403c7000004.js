//Localize The Barycenter of a Triangle
//https://www.codewars.com/kata/5601c5f6ba804403c7000004/train/javascript

function barTriang(p1, p2, p3) {
  return [+((p1[0] + p2[0] + p3[0]) / 3).toFixed(4), +((p1[1] + p2[1] + p3[1]) / 3).toFixed(4)];
}


console.log(barTriang([4, 6], [12, 4], [10, 10]));