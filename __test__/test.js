describe(Human, () => {
  test("should return Human object", () => {
    const human = new Human(50, 75);
    expect(human.age).toEqual(50);
  });
});

test("should return years left on Earth if age is less than life_exp", () => {
  const human = new Human(50, 75);
  let age_left = CalcAgeLeft("Earth", human);
  expect(age_left).toEqual(25);
});

