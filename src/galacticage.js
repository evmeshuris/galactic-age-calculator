export class Human {
  constructor(age, activityLevel, location) {
    this.age = age;
    this.activityLevel = activityLevel;
    this.location = location;
  }

  GetLifeExp() {
    let average = 72.6;
    let location_modifier = 1;
    let activity_modifier = 1;

    switch (this.location) {
      case "Sea":
      case "Forest":
        location_modifier = 1.1;
        break;
      case "City":
        location_modifier = 0.9;
        break;
      default:
        location_modifier = 1;
        break;
    }

    switch (this.activityLevel) {
      case "High":
        activity_modifier = 1.1;
        break;
      case "Low":
        activity_modifier = 0.75;
        break;
      default:
        activity_modifier = 1;
        break;
    }

    let lifeExp = Number(
      Math.abs(average * location_modifier * activity_modifier).toFixed(2)
    );

    return lifeExp;
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

    return age_left;
  }
}
