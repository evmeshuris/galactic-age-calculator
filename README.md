#  Super Galactic Age Calculator

#### Description
This application determines a user's age based on a planet's solar years. It returns user's age in Mercury, Venus, Mars, Jupiter and Earth.

#### Evgeniya Meshuris

## Technologies Used

* VS Code
* HTML/CSS/Bootstrap
* JavaScript 
* Node
* npm
* ESLint
* Jest

## Description

This application determines a user's age based on a planet's solar years. It returns user's age in Mercury, Venus, Mars, Jupiter and Earth. In addition life expectancy modified based on Activity Level and Location. 

## Setup/Installation Requirements

* Copy the repository URL named "galactic-age"
* Clone the copied repository to your computer
* Open the cloned directory named "galactic-age"
* Open __test__/test.js file
* Run npm install; npm run start; npm run test in Terminal to see tests 

## Known Bugs

* *No known bugs at this time*

## License

Licensed under the [MIT License](LICENSE)

Copyright (c) _2022_ _Evgeniya Meshuris_

Tests:

* test: "it should return Human object"
* code: const human = new Human(50, "Low", "Forest");
* Expected output: 50

* test: "it should return years left on Earth if age is less than life_exp, activityLevel is Low, location Forest"
* code: const human = new Human(50, "Low", "Forest");
* let age_left = human.CalcAgeLeft("Earth");
* Expected output: 9.89

* test: "it should return years left on Earth if age is more than life_exp, activityLevel is High, location Sea"
* code: const human = new Human(60, "High", "Sea");
* let age_left = human.CalcAgeLeft("Earth");
* Expected output: 27.85

* test: "it should return years left on Mars if age is less than life_exp activityLevel unknown, location Sea"
* code: const human = new Human(50, "", "Sea");
* let age_left = human.CalcAgeLeft("Mars");
* Expected output: 56.14

* test: "it should return years left on Mars if age is more than life_exp, activityLevel Low, location City"
* code: const human = new Human(80, "Low", "City");
* let age_left = human.CalcAgeLeft("Mars");
* Expected output: 58.26

* test: "it should return years left on Venus if age is less than life_exp, activityLevel Low, location Forest"
* code: const human = new Human(60, "Low", "Forest");
* let age_left = human.CalcAgeLeft("Venus");
* Expected output: 0.07

* test: "it should return years left on Jupiter if age is more than life_exp, activityLevel unknown, location City"
* code: const human = new Human(80, "", "City");
* let age_left = human.CalcAgeLeft("Jupiter");
* Expected output: 173.87

* test: "it should return years left on Mercury if age is more than life_exp, activityLevel High, location Forest"
* code: const human = new Human(80, "High", "Forest");
* let age_left = human.CalcAgeLeft("Mercury");
* Expected output: 1.88

* test: "it should return years left on Mercury if age is more than life_exp, activityLevel High, location unknown"
* code: const human = new Human(80, "High", "");
* let age_left = human.CalcAgeLeft("Mercury");
* Expected output: 0.03

