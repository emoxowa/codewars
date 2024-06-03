//Santa's Naughty List
//https://www.codewars.com/kata/5a0b4dc2ffe75f72f70000ef/train/javascript

function findChildren(santasList, children) {
  return [...new Set(santasList.filter((i) => children.includes(i)))].sort();
}

console.log(
  findChildren(
    ["Jason", "Jackson", "Jordan", "Johnny"],
    ["Jason", "Jordan", "Jennifer"]
  )
);
