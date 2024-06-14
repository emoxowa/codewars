//Prize Draw
//https://www.codewars.com/kata/5616868c81a0f281e500005c

function rank(st, we, n) {
  if (st.length === 0) return "No participants";
  const arr = st.split(",");
  if (arr.length < n) return "Not enough participants";
  const som = arr
    .map((el, i) => ({
      name: el,
      score:
        el
          .toLowerCase()
          .split("")
          .reduce((acc, curr) => acc + curr.charCodeAt() - 96, el.length) *
        we[i],
    }))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
  return som[n-1].name;
}

console.log(
  rank(
    `Natalie,Sofia,Aiden,Alexander,Addison,Ethan,Mason,Daniel,Michael,Lily,James,Mia,Elizabeth,Noah,Joshua,Andrew,Grace,Sophia,Isabella,Jayden,Emily,Benjamin,Avery,Ava,Matthew`,
    [3, 3, 6, 1, 6, 4, 2, 4, 2, 3, 1, 1, 2, 2, 2, 5, 2, 1, 1, 1, 4, 3, 3, 1, 3],
    6
  )
);

console.log(['Benjamin', 'Avery'].sort());