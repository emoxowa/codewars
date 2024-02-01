//Interview Question (easy)
//https://www.codewars.com/kata/5b358a1e228d316283001892/train/javascript

function getStrings(city){
  let result='';
  let obj={};
  
  for (let i=0; i < city.length; i++) {
    let char = city[i].toLowerCase();
    
    if(char !== ' ') {
      obj[char] = obj[char] ? obj[char]+'*': '*';
    }
  }
  
  for (let key in obj) {
    result+=key+':'+obj[key]+','
  }
  
  return result.slice(0,-1);
}