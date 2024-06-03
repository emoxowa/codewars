//Javascript filter - 1
//https://www.codewars.com/kata/525d9b1a037b7a9da7000905

function searchNames(logins) {
  return logins.filter((i) => /_$/.test(i[0]))
 }

console.log(
  searchNames([
    ["foo", "foo@foo.com"],
    ["bar_", "bar@bar.com"],
  ])
);