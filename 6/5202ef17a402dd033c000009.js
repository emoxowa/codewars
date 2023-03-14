//Title Case
//https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript

function titleCase(title, minorWords) {
  minorWords = minorWords ? minorWords.toLowerCase().split(" ") : " ";
  return title
    ? title
        .toLowerCase()
        .split(" ")
        .map((i, index) =>
          minorWords.includes(i) && index != 0
            ? i
            : i.slice(0, 1).toUpperCase() + i.slice(1)
        )
        .join(" ")
    : "";
}

