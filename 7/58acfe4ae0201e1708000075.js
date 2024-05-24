//Simple Fun #152: Invite More Women?
//https://www.codewars.com/kata/58acfe4ae0201e1708000075

function inviteMoreWomen(L) {
  return L.reduce((acc, curr) => acc + curr) > 0 ;
}

console.log(inviteMoreWomen([1, -1]));