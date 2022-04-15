export class Human {
  constructor(age, life_exp) {
    this.age = age;
    this.life_exp = life_exp;
    // this.activityLevel = this.activityLevel;
    // this.location = this.location;
  }

  // GetLifeExp(location) {
  //   let lifeExp = this.CalcAgeLeft()
  //   let average = 80;
  //   switch (location) {
  //     case "Sea":
  //     case "Forest":
  //       average = average * 1.1;
  //       break;
  //     case "City":
  //       average = average * 0.9;
  //       break;
  //     default:
  //       average = 80;
  //     break;  
  //   }
  //   const getLifeExp = Number(
  //     (Math.abs(lifeExp) * average).toFixed(2)
  //   );
  //   return getLifeExp;
  // }

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
      (Math.abs(this.life_exp - this.age) * modifier).toFixed(2)
    );
    console.log(this);
    console.log("humans age_left: " + age_left);
    // console.log("humans life_exp: " + this.GetLifeExp());

    return age_left;
  }
}
