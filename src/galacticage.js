export class Human {
  constructor(age, life_exp) {
    this.age = age;
    this.life_exp = life_exp;
  }

  GetLifeExp() {
    //logic for attributes
    return this.life_exp;
  }

  CalcAgeLeft(planet) {
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
        modifier = 1;
        break;
    }
    const age_left = Number(
      (Math.abs(this.GetLifeExp() - this.age) * modifier).toFixed(2)
    );
    console.log(this);
    console.log("humans age_left: " + age_left);
    console.log("humans life_exp: " + this.GetLifeExp());

    return age_left;
  }
}
