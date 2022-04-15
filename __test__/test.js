import { Human } from "../src/galacticage.js";

describe(Human, () => {
  test("should return Human object", () => {
    const human = new Human(50, "Low", "Forest");
    expect(human.age).toEqual(50);
  });
});

test("should return years left on Earth if age is less than life_exp, activityLevel is Low, location Forest", () => {
  const human = new Human(50, "Low", "Forest");
  let age_left = human.CalcAgeLeft("Earth");
  expect(age_left).toEqual(9.89);
});

test("should return years left on Earth if age is more than life_exp, activityLevel is High, location Sea", () => {
  const human = new Human(60, "High", "Sea");
  let age_left = human.CalcAgeLeft("Earth");
  expect(age_left).toEqual(27.85);
});

test("should return years left on Mars if age is less than life_exp activityLevel unknown, location Sea", () => {
  const human = new Human(50, "", "Sea");
  let age_left = human.CalcAgeLeft("Mars");
  expect(age_left).toEqual(56.14);
});

test("should return years left on Mars if age is more than life_exp, activityLevel Low, location City", () => {
  const human = new Human(80, "Low", "City");
  let age_left = human.CalcAgeLeft("Mars");
  expect(age_left).toEqual(58.26);
});

test("should return years left on Venus if age is less than life_exp, activityLevel Low, location Forest", () => {
  const human = new Human(60, "Low", "Forest");
  let age_left = human.CalcAgeLeft("Venus");
  expect(age_left).toEqual(0.07);
});

test("should return years left on Jupiter if age is more than life_exp, activityLevel unknown, location City", () => {
  const human = new Human(80, "", "City");
  let age_left = human.CalcAgeLeft("Jupiter");
  expect(age_left).toEqual(173.87);
});

test("should return years left on Mercury if age is more than life_exp, activityLevel High, location Forest", () => {
  const human = new Human(80, "High", "Forest");
  let age_left = human.CalcAgeLeft("Mercury");
  expect(age_left).toEqual(1.88);
});

test("should return years left on Mercury if age is more than life_exp, activityLevel High, location unknown", () => {
  const human = new Human(80, "High", "");
  let age_left = human.CalcAgeLeft("Mercury");
  expect(age_left).toEqual(0.03);
});
