//Two fighters, one winner.
//https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript

function declareWinner(fighter1, fighter2, firstAttacker) {
  while (fighter1.health > 0 && fighter2.health > 0) {
    if (firstAttacker == fighter1.name) {
      fighter2.health = fighter2.health - fighter1.damagePerAttack;
      firstAttacker = fighter2.name;
      if (fighter2.health <= 0) {
        return fighter1.name;
      }
    } else {
      fighter1.health = fighter1.health - fighter2.damagePerAttack;
      firstAttacker = fighter1.name;
      if (fighter1.health <= 0) {
        return fighter2.name;
      }
    }
  }
}
