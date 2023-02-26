//Calculate BMI
//https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript

function bmi(weight, height) 
{
  let bmi = weight/Math.pow(height,2);
  if(bmi<=18.5)
  {
    return 'Underweight';
  }  
  if(bmi<=25)
  {
    return 'Normal';
  } 
  if(bmi<=30)
  {
    return 'Overweight';
  } 
  if(bmi>30)
  {
    return 'Obese';
  } 
}