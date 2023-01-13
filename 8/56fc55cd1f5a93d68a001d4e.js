//How many stairs will Suzuki climb in 20 years?
//https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e/train/javascript

function stairsIn20(s) {
  return 20 * s.flat().reduce((sum, curr)=> sum + curr,0 );
}
