export class Human {
  constructor(age, life_exp) {
    this.age = age;
    this.life_exp = life_exp;
  }
  GetLifeExp() {
    return this.life_exp;
  }
}

function CalcAgeLeft(planet, human) {
  let modifier = 1;
  switch (planet) {
    case "Mercury":
      modifier = 0.24;
      break;
    case "Venus":
      modifier = 0.62;
      break;
    case "Mars":
      modifier = 1.88;
      break;
    case "Jupiter":
      modifier = 11.86;
      break;
    default:
      1;
  }
  return Math.abs(human.GetLifeExp() - human.age) * modifier;
}

let human = new human(25, 50);
let age_left = CalcAgeLeft("earth", human);
