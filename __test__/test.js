import { Human } from "../src/galacticage.js";

describe(Human, () => {
  test("should return Human object", () => {
    const human = new Human(50, 75);
    expect(human.age).toEqual(50);
  });
});

test("should return years left on Earth if age is less than life_exp", () => {
  const human = new Human(50, 75);
  let age_left = human.CalcAgeLeft("Earth");
  expect(age_left).toEqual(25);
});

test("should return years left on Earth if age is more than life_exp", () => {
  const human = new Human(80, 88);
  let age_left = human.CalcAgeLeft("Earth");
  // let life_exp = human.GetLifeExp("Sea");

  expect(age_left).toEqual(8);
  // expect(life_exp).toEqual(88);
});

test("should return years left on Mars if age is less than life_exp", () => {
  const human = new Human(50, 75);
  let age_left = human.CalcAgeLeft("Mars");
  expect(age_left).toEqual(47);
});

test("should return years left on Mars if age is more than life_exp", () => {
  const human = new Human(80, 75);
  let age_left = human.CalcAgeLeft("Mars");
  expect(age_left).toEqual(9.4);
});

test("should return years left on Venus if age is less than life_exp", () => {
  const human = new Human(50, 75);
  let age_left = human.CalcAgeLeft("Venus");
  expect(age_left).toEqual(15.5);
});

test("should return years left on Jupiter if age is more than life_exp", () => {
  const human = new Human(80, 75);
  let age_left = human.CalcAgeLeft("Jupiter");
  expect(age_left).toEqual(59.3);
});

test("should return years left on Mercury if age is more than life_exp", () => {
  const human = new Human(80, 75);
  let age_left = human.CalcAgeLeft("Mercury");
  expect(age_left).toEqual(1.2);
});

test("should return 0 life_exp", () => {
  const human = new Human(60, 60);
  let age_left = human.CalcAgeLeft("Mars");
  expect(age_left).toEqual(0);
});
