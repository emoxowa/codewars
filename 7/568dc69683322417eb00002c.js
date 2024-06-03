//L2: Triple X
//https://www.codewars.com/kata/568dc69683322417eb00002c

function tripleX(str) {
  return /[x]{3}/.test([...str].splice(str.indexOf("x"), 3).join(""));
}

console.log(tripleX("warmsoftxx"));
