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

test("should return years left on Earth if age is more than life_exp", () => {
  const human = new Human(80, 75);
  let age_left = CalcAgeLeft("Earth", human);
  expect(age_left).toEqual(5);
});

test("should return years left on Mars if age is less than life_exp", () => {
  const human = new Human(50, 75);
  let age_left = CalcAgeLeft("Mars", human);
  expect(age_left).toEqual(47);
});

test("should return years left on Mars if age is more than life_exp", () => {
  const human = new Human(80, 75);
  let age_left = CalcAgeLeft("Mars", human);
  expect(age_left).toEqual(9.4);
});

test('should return 0 life_exp', () => {
  const human = new Human(60, 60);
  let age_left = CalcAgeLeft("Mars", human);
  expect(age_left).toEqual(0);
});