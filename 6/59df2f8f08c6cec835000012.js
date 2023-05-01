//Meeting
//https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript

function meeting(s) {
  let arr = s
    .split(";")
    .map((i) => i.toUpperCase().split(":").reverse())
    .sort().join(')(');
  return JSON.stringify(arr)
    .replace(/\,/g, ", ")
    .replace(/\"/, "(")
    .replace(/\"/, ")");
}


console.log(
  meeting(
    "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"
  )
);

//Best Solutions

function meeting(s) {
  return s
    .split(";")
    .map((i) => i.toUpperCase().split(":").reverse().join(", "))
    .sort()
    .map((i) => "(" + i + ")")
    .join("");
}

const meeting = (s) => {
  return s
    .toUpperCase()
    .replace(/(\w+):(\w+)/g, "($2, $1)")
    .split(";")
    .sort()
    .join("");
};