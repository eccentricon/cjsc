"use strict";

let lesson;

// ---------------------------------------------------------------------------
lesson = "32. Activating strict mode";
// ---------------------------------------------------------------------------
logBanner(lesson);

let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true; // typo in variable name!
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio"; // Oops! Reserved (future) keyword
// const private = 534; // Oops! Reserved (future) keyword

// ---------------------------------------------------------------------------
lesson = "33. Functions";
// ---------------------------------------------------------------------------
logBanner(lesson);

function logger() {
  console.log("My name is Ted");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

logAssignment(lesson);

/**
 * Returns a string with this format:
 *
 * 'Finland has 6 million people and its capital city is Helsinki'.
 *
 * @param {string} country
 * @param {number} population
 * @param {string} capitalCity
 */
function describeCountry(country, population, capitalCity) {
  return (
    `${country} has ${population} million people ` +
    `and its capital city is ${capitalCity}.`
  );
}

const infoFinland = describeCountry("Finland", 6, "Helsinki");
const infoUS = describeCountry("United States", 333, "Washington");
const infoIndia = describeCountry("India", 1400, "New Delhi");
console.log(infoFinland);
console.log(infoUS);
console.log(infoIndia);

// ---------------------------------------------------------------------------
lesson = "34. Function declarations vs. expressions";
// ---------------------------------------------------------------------------
logBanner(lesson);

// a function declaration
function calcAge1(birthYear) {
  const CURRENT_YEAR = 2024;
  return CURRENT_YEAR - birthYear;
}
let birthYear = 1961;
console.log(
  `If you were born in ${birthYear}, your age is ${calcAge1(birthYear)}`
);

// a function expression
const calcAge2 = function (birthYear) {
  const CURRENT_YEAR = 2024;
  return CURRENT_YEAR - birthYear;
};
// call calcAge2 in the same way
console.log(
  `If you were born in ${birthYear}, your age is ${calcAge2(birthYear)}`
);

logAssignment(lesson);

/**
 * Returns the percentage of the world population that the given
 * population represents. For example, China has 1441 million people,
 * so it's about 18.2% of the world population.
 *
 * @param {number} population
 */
const WORLD_POPULATION = 8187; // in millions
function percentageOfWorld1(population) {
  const percent = (population / WORLD_POPULATION) * 100;
  return Number(percent.toFixed(2));
}
const popChina = 1400;
const popIndonesia = 276;
const popBrazil = 214;
const percentChina = percentageOfWorld1(popChina);
const percentIndonesia = percentageOfWorld1(popIndonesia);
const percentBrazil = percentageOfWorld1(popBrazil);
console.log(
  `China's ${popChina} million people are ${percentChina}% of the world.`
);
console.log(
  `Indonesia's ${popIndonesia} million people are ${percentIndonesia}% of the world.`
);
console.log(
  `Brazil's ${popBrazil} million people are ${percentBrazil}% of the world.`
);
console.log("----");

/**
 * Calculates the percentage of the world population for a given population.
 *
 * @param {number} population
 * @returns {number} The percentage of the world population.
 */
const percentageOfWorld2 = function (population) {
  const percent = (population / WORLD_POPULATION) * 100;
  return Number(percent.toFixed(2));
};

/**
 * Prints the percentage of the world population for a given country.
 *
 * @param {string} country
 * @param {number} population
 */
const printPopPercentage = function (country, population) {
  console.log(
    `${country}'s ${population} million people are about ` +
      `${percentageOfWorld2(population)}% of the world.`
  );
};

printPopPercentage("China", popChina);
printPopPercentage("Brazil", popBrazil);
printPopPercentage("Indonesia", popIndonesia);

// ---------------------------------------------------------------------------
lesson = "35. Arrow functions";
// ---------------------------------------------------------------------------
logBanner(lesson);

// const calcAge2 = function (birthYear) {
//   const CURRENT_YEAR = 2024;
//   return CURRENT_YEAR - birthYear;
// };
const CURRENT_YEAR = new Date().getFullYear();
const calcAge3 = (birthYear) => CURRENT_YEAR - birthYear;
// call calcAge3 in the same way
birthYear = 1961;
console.log(`It is now ${CURRENT_YEAR}.`);

console.log(
  `If you were born in ${birthYear}, your age is ${calcAge3(birthYear)}.`
);

const yearsUntilRetirement = (birthYear, firstName) => {
  const RETIREMENT_AGE = 65;
  const AGE = calcAge3(birthYear);
  return `${firstName} can retire in ${RETIREMENT_AGE - AGE} years.`;
};

console.log(yearsUntilRetirement(1961, "Ted"));
console.log(yearsUntilRetirement(1959, "Colette"));

logAssignment(lesson);

const percentageOfWorld3 = (population) =>
  Number(((population / WORLD_POPULATION) * 100).toFixed(2));

console.log(
  `Brazil's ${popBrazil} people are ${percentageOfWorld3(popBrazil)}` +
    `% of the world.`
);

// ---------------------------------------------------------------------------
lesson = "36. Functions calling other functions";
// ---------------------------------------------------------------------------
logBanner(lesson);

const cutFruitPieces = function (fruit) {
  return fruit * 4;
};

function fruitProcessor36(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice =
    `Juice with ${applePieces} pieces of apple, ` +
    `and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor36(2, 3));

logAssignment(lesson);
/*
 * Create a function called describePopulation. Use the function
 * type you like the most. This function takes in two arguments:
 * country and population, and returns a strings like this:
 * 'China has 1441 million people, which is about 18.2% of the world'.
 *
 * To calculate the percentage, describePopulation calls the
 * percentageOfWorld1 you created earlier.
 *
 * Call describePopulation with data for 3 countries of your choice.
 */

const describePopulation36 = (country, population) =>
  `${country} has ${population} million people, ` +
  `which is about ${percentageOfWorld1(population)}% of the world.`;

console.log(describePopulation36("China", popChina));
console.log(describePopulation36("Indonesia", popIndonesia));
console.log(describePopulation36("Brazil", popBrazil));

// ---------------------------------------------------------------------------
lesson = "Coding Challenge #1";
// ---------------------------------------------------------------------------
logBanner(lesson);

/* 
 * Coding Challenge #1 
 * Back to the two gymnastics teams, the Dolphins and the Koalas! There is 
 * a new gymnastics discipline, which works differently. Each team competes 
 * 3 times, and then the average of the 3 scores is calculated (so one 
 * average score per team). A team only wins if it has at least double the 
 * average score of the other team. Otherwise, no team wins! 
 * 
 * Your tasks: 
 * 1. Create an arrow function 'calcAverage' to calculate the average of 
 *    3 scores 
 * 2. Use the function to calculate the average for both teams 
 * 3. Create a function 'checkWinner' that takes the average score of each 
 *    team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the 
 *    winner to the console, together with the victory points, according to 
 *    the rule above. Example: "Koalas win (30 vs. 13)" 
 * 4. Use the 'checkWinner' function to determine the winner for both Data 1 
      and Data 2
 * 5. Ignore draws this time 
 *
 * Test data: 
 * § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 
 * § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27 
 * Hints: 
 * § To calculate average of 3 values, add them all together and divide by 3 
 * § To check if number A is at least double number B, check for A >= 2 * B. 
 * 
 * Apply this to the team's average scores 😉 
 * 
 * GOOD LUCK 😀
 * 
 */

const calcAverage3 = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins.");
  }
}
// Test data 1:
let scoreDolphins = calcAverage3(44, 23, 71);
let scoreKoalas = calcAverage3(65, 54, 49);
checkWinner(scoreDolphins, scoreKoalas);

// Test data 2:
scoreDolphins = calcAverage3(85, 54, 41);
scoreKoalas = calcAverage3(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);

// Test data 1:
// console.log("Test data 1:");
// console.log(`Dolphins average: ${calcAverage3(44, 23, 71)}`);
// console.log(`Koalas average: ${calcAverage3(65, 54, 49)}`);
// checkWinner(calcAverage3(44, 23, 71), calcAverage3(65, 54, 49));

// Test data 2:
// console.log("Test data 2:");
// console.log(`Dolphins average: ${calcAverage3(85, 54, 41)}`);
// console.log(`Koalas average: ${calcAverage3(23, 34, 27)}`);
// checkWinner(calcAverage3(85, 54, 41), calcAverage3(23, 34, 27));

// ---------------------------------------------------------------------------
lesson = "39. Introduction to arrays";
// ---------------------------------------------------------------------------
logBanner(lesson);

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]); // "Michael"
console.log(friends[2]); // "Peter"

console.log(`friends has ${friends.length} elements.`);
console.log(friends[friends.length - 1]); // last element

friends[2] = "Jay";
console.log(friends); // ['Michael', 'Steven', 'Jay']

let mixedArray = [10, "hello", true, { name: "Alice" }];
console.log(mixedArray);

const fname = "Jonas";
const jonas = [fname, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas); // ['Jonas', 'Schmedtmann', 46, 'teacher', Array(3)]

logAssignment(lesson);
/* Create an array containing 4 population values of 4 countries of your
 * choice. You may use the values you have been using previously. Store
 * this array into a variable called populations.
 *
 * Log to the console whether the array has 4 elements or not (true or false).
 *
 * Create an array called percentages containing the percentages of the world
 * population for these 4 population values. Use the function
 * percentageOfWorld1 that you created earlier to compute the 4 percentage
 * values.
 */

// const popChina = 1400;
// const popIndonesia = 276;
// const popBrazil = 214;
const popUSA = 335;

const countries = ["China", "Indonesia", "Brazil", "USA"];

const populations = [popChina, popIndonesia, popBrazil, popUSA];
console.log(`populations has 4 elements? ${populations.length === 4}`);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
percentages.forEach((percentage, index) => {
  console.log(
    `${index + 1}. ${countries[index]}: ${populations[index]}M - ${percentage}%`
  );
});

// ---------------------------------------------------------------------------
lesson = logBanner("40. Introduction to arrays");
// ---------------------------------------------------------------------------
friends[2] = "Peter"; // reset to original array values
console.log(friends); // ['Michael', 'Steven', 'Peter']

// push()
const newLength = friends.push("Jay");
console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']
console.log(newLength); // 4

// unshift()
friends.unshift("John");
console.log(friends); // ['John', 'Michael', 'Steven', 'Peter', 'Jay']

// pop()
const popped = friends.pop();
console.log(popped); // 'Jay'
console.log(friends); // ['John', 'Michael', 'Steven', 'Peter']

// shift()
const shifted = friends.shift();
console.log(shifted); // 'John'
console.log(friends); // ['Michael', 'Steven', 'Peter']

// indexOf()
console.log(friends.indexOf("Steven")); // 1

// includes
console.log(friends.includes("Steven")); // true
console.log(friends.includes("Bob")); // false
friends.push(23);
console.log(friends.includes("23")); // false, strict equality
console.log(friends.includes(23)); // true

if (friends.includes("Steven")) console.log("You have a friend named Steven.");

logAssignment(lesson);
/*
 * 1. Create an array containing all the neighbouring countries of a country of your
 *    choice. Choose a country which has at least 2 or 3 neighbours. Store the array
 *    into a variable called neighbours.
 *
 * 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
 *    your selected country, so add it to the end of the neighbours array.
 *
 * 3. Unfortunately, after some time the new country is dissolved, so remove it from the
 *    end of the array.
 *
 * 4. If the neighbours array does not include the country 'Germany', log to the console:
 *    'Probably not a central european country :D'.
 *
 * 5. Change the name of one of your neighbouring countries. To do that, find the index
 *    of the country in the neighbours array, and then use that index to change the array
 *    at that index position. For example, you can search for 'Sweden' in the array, and
 *    then replace it with 'Republic of Sweden'.
 */

let neighbors = [
  "North Korea",
  "Russia",
  "Mongolia",
  "Kazakhstan",
  "Kyrgyzstan",
  "Tajikistan",
  "Afghanistan",
  "Pakistan",
  "India",
  "Nepal",
  "Bhutan",
  "Myanmar",
  "Laos",
  "Vietnam",
];
console.log(neighbors);
console.log("Adding Utopia...");
neighbors.push("Utopia");
console.log(neighbors);
console.log("Utopia dissolved...");
neighbors.pop();
console.log(neighbors);
if (!neighbors.includes("Germany"))
  console.log("Probably not a central european country :D");
let indiaIndex = neighbors.indexOf("India");
neighbors[indiaIndex] = "Republic of India";
console.log(neighbors);

// ---------------------------------------------------------------------------
lesson = logBanner("41. Coding challenge 2");
// ---------------------------------------------------------------------------

/*
 * Steven wants you to improve his tip calculator, using the same rules as
 * before — tip 15% of the bill if the bill value is between 50 and 300, and if
 * the value is different, the tip is 20%.
 *
 * Your tasks:
 *
 * 1. Write a function calcTip that takes any bill value as an input and returns
 *    the corresponding tip, calculated based on the rules above (you can check
 *    out the code from the first tip calculator challenge if you need to). Use
 *    the function type you like the most. Test the function using a bill value
 *    of 100.
 *
 * 2. And now let's use arrays! So, create an array called bills containing the
 *    test data below.
 *
 * 3. Create an array called tips containing the tip value for each bill,
 *    calculated from the function you created before.
 *
 * 4. BONUS: Create an array totals containing the total values, so the
 *    bill + tip.
 *
 * TEST DATA: 125, 555, and 44.
 *
 */

/**
 * Calculates the tip for the specified bill amount.
 *
 * @param {number} bill - The total bill amount
 * @returns {number} - The tip amount
 */
function tipCalc(bill) {
  const tipRate = bill >= 50 && bill <= 300 ? 15 : 20;
  return bill * (tipRate / 100);
}

let bill = 100;
console.log(`Tip for a bill of $${bill} is $${tipCalc(bill)}`);
bill = 400;
console.log(`Tip for a bill of $${bill} is $${tipCalc(bill)}`);

let bills = [125, 555, 44];
console.log(bills);

// const tips = [18.75, 111, 8.8];
let tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];
console.log(tips);

let totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);

// ---------------------------------------------------------------------------
lesson = logBanner("42. Introduction to objects");
// ---------------------------------------------------------------------------

const jonas2 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas2);

logAssignment(lesson);
/*
 * Create an object called myCountry for a country of your choice,
 * containing properties country, capital, language, population and
 * neighbours (an array like we used in previous assignments).
 */
let myCountry = {
  country: "United States",
  capital: "Washington, D.C.",
  language: "English",
  population: 346,
  neighbors: ["Canada", "Mexico"],
};
console.log(myCountry);

// ---------------------------------------------------------------------------
lesson = logBanner("43. Dot vs. bracket notation");
// ---------------------------------------------------------------------------

console.log(jonas2.lastName); // Dot notation
console.log(jonas2["lastName"]); // Bracket notation

const nameKey = "Name";
console.log(jonas2[`first${nameKey}`], jonas2[`last${nameKey}`]);

// const interestedIn = prompt(
//   "Which property? 'firstName', 'lastName', 'age', 'job', or 'friends'."
// );

let interestedIn = "weight";

// Non-existent propertios are 'undefined' (falsey)
if (jonas2[interestedIn]) {
  console.log(`${interestedIn}: ${jonas2[interestedIn]}`);
} else {
  console.log(`Unknown property: '${interestedIn}'`);
}

jonas2.location = "Portugal";
jonas2["twitter"] = "@jonasschmedtman";
console.log(jonas2);

// Challenge:
// Print "Jonas has 3 friends, and his best friend is Michael."
let outString = `${jonas2.firstName} has `;
outString += `${jonas2.friends.length} friends, `;
outString += `and his best friend is ${jonas2.friends[0]}.`;
console.log(outString);

logAssignment(lesson);
/*
 * 1. Using the object from the previous assignment, log a string
 *    like this to the console: 'Finland has 6 million finnish-speaking people,
 *    3 neighbouring countries and a capital called Helsinki'.
 */

outString = `${myCountry.country} has ${myCountry.population} million `;
outString += `${myCountry.language}-speaking people, `;
outString += `${myCountry.neighbors.length} neighbouring countries, `;
outString += `and a capital called ${myCountry.capital}`;
console.log(outString);

/*
 * 2. Increase the country's population by two million using dot notation,
 *    and then decrease it by two million using bracket notation.
 */
myCountry.population += 2;
console.log(`Population is now ${myCountry.population} million.`);
myCountry[`population`] -= 2;
console.log(`Population is now ${myCountry["population"]} million.`);

// ---------------------------------------------------------------------------
lesson = logBanner("44. Object methods");
// ---------------------------------------------------------------------------

const jonas3 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  // calcAge: function (birthYear) {
  //   return new Date().getFullYear() - birthYear;
  // },
  // calcAge: function () {
  //   console.log(this);
  //   return new Date().getFullYear() - this.birthYear;
  // },
  calcAge: function () {
    // Create a new property
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
  },
};
console.log(jonas3.calcAge());
console.log(jonas3.age);
console.log(jonas3.age);
console.log(jonas3.age);

// Challenge
// Write a method to print "Jonas is a 46-year-old teacher,
// and he has {a|no} driver's license."

jonas3.about = function () {
  this.calcAge();
  return `${this.firstName} is a ${this.age}-year-old ${this.job}
  and he has ${this.hasDriversLicense ? "a" : "no"} drivers's licence.`;
};
console.log(jonas3.about());

logAssignment(lesson);
/*
 * 1. Add a method called describe to the myCountry object. This method
 *    will log a string to the console, similar to the string logged in
 *    the previous assignment, but this time using the 'this' keyword.
 *
 * 2. Call the describe method.
 *
 * 3. Add a method called checkIsland to the myCountry object. This method
 *    will set a new property on the object, called isIsland. isIsland will
 *    be true if there are no neighbouring countries, and false if there are.
 *    Use the ternary operator to set the property.
 */
myCountry.describe = function () {
  console.log(
    `${this.country} has ${this.population} million ` +
      `${this.language}-speaking people, ` +
      `${this.neighbors.length} neighbouring countries, ` +
      `and a capital called ${this.capital}`
  );
};
myCountry.describe();

myCountry.checkIsland = function () {
  this.isIsland = this.neighbors.length ? false : true;
  return this.isIsland;
};

console.log(
  `${myCountry.country} ${myCountry.checkIsland() ? "is" : "is not"} an island.`
);

// ---------------------------------------------------------------------------
lesson = logBanner("45. Coding challenge 3");
// ---------------------------------------------------------------------------

/*
 * Let's go back to Mark and John comparing their BMIs!
 *
 * This time, let's use objects to implement the calculations!
 * Remember: BMI = mass / (height * height) (mass in kg and height in meters).
 *
 * Your tasks:
 *
 * 1. For each of them, create an object with properties for their full name,
 *    mass, and height (Mark Miller and John Smith). Name these objects as mark
 *    and john, and their properties exactly as fullName, mass and height.
 *
 * 2. Create a calcBMI method on each object to calculate the BMI (the same method
 *    on both objects). Assign the BMI value to a property called bmi (lowercase),
 *    and also return it from the method.
 *
 * 3. Log to the console who has the higher BMI, together with the full name and the
 *    respective BMI. Example:
 *    "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".
 *
 * TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
 *
 * IMPORTANT: The ** operator is not supported in this editor. Please make sure to use
 * exactly this formula mass / (height * height), and not this one mass / (height ** 2).
 */
const mark = {
  fullName: "Mark Miller",
  mass: 78, // kg
  height: 1.69, // meters
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92, // kg
  height: 1.95, // meters
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
let higher = mark;
let lower = john;
if (john.calcBMI() > mark.calcBMI()) {
  higher = john;
  lower = mark;
}
console.log(
  `${higher.fullName}'s BMI (${higher.bmi}) is ` +
    `higher than ${lower.fullName}'s (${lower.bmi})!`
);

// ---------------------------------------------------------------------------
lesson = logBanner("46. The for loop");
// ---------------------------------------------------------------------------

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

logAssignment(lesson);
/*
 * There are elections in your country! in a small town, there are only 50 voters.
 * Use a for loop to simulate the 50 people voting, by logging a string like this
 * to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'.
 */
for (let voter = 1; voter <= 10; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}

// ---------------------------------------------------------------------------
lesson = logBanner("47. Looping arrays, breaking, and continuing");
// ---------------------------------------------------------------------------
let jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
console.log(jonasArray);

let types = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(`Element ${i}: ${jonasArray[i]} (${typeof jonasArray[i]})`);
  // types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
}
console.log(types);

let years2 = [1991, 2007, 1969, 2020];
let ages = [];
for (let i = 0; i < years2.length; i++) {
  ages.push(CURRENT_YEAR - years2[i]);
}
console.log(ages);
for (let i = 0; i < ages.length; i++) {
  console.log(
    `In ${CURRENT_YEAR}, those born in ${years2[i]} are ${ages[i]} years old.`
  );
}

// continue and break
console.log(`--- ONLY STRINGS ---`);
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log(`--- BREAK WITH NUMBER ---`);
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;
  console.log(jonasArray[i], typeof jonasArray[i]);
}

logAssignment(lesson);
/*
 * 1. Let's bring back the populations array from a previous assignment.
 *
 * 2. Use a for loop to compute an array called percentages2 containing
 *    the percentages of the world population for the 4 population values.
 *    Use the function percentageWOrld1 that you created earlier.
 *
 * 3. Confirm that percentages2 contains exactly the same values as the
 *    percentages array that we created manually in the previous assignment,
 *    and reflect on how much better this solution is.
 */
console.log(populations);

let percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  console.log(
    `Population ${populations[i]} million is ${percentageOfWorld1(
      populations[i]
    )} percent of the world.`
  );
  percentages2.push(percentageOfWorld1(populations[i]));
}

for (let i = 0; i < percentages2.length; i++) {
  // console.log(
  //   `percentages[${i}]: ${percentages[i]}\tpercentages2[${i}]: ${percentages2[i]}`
  // );
  if (percentages[i] === percentages2[i]) continue;
  console.log(
    `percentages[${i}]: ${percentages[i]}\tpercentages2[${i}]: ${percentages2[i]}`
  );
}

// ---------------------------------------------------------------------------
lesson = logBanner("48. Looping backwards and loops in loops");
// ---------------------------------------------------------------------------
// (Defined above...)
// let jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// Loop backwards
for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(`Element ${i}: ${jonasArray[i]}`);
}

// Nested looping
// 3 exercises, 5 reps each
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`----- Starting exercise ${exercise}`);
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`\t🏋️‍♀️ Exercise ${exercise}, repitition ${rep}`);
  }
}

logAssignment(lesson);
/*
 * 1. Store this array of arrays into a variable called
 *    listOfNeighbours:
 *
 * [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
 *
 * 2. Log only the neighbouring countries to the console,
 *    one by one, not the entire arrays. Log a string like
 *    'Neighbour: Canada' for each country.
 *
 * 3. You will need a loop inside a loop for this. This is
 *    actually a bit tricky, so don't worry if it's too difficult
 *    for you! But you can still try to figure this out anyway 😉
 */
let listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbor: ${listOfNeighbours[i][j]}`);
  }
}

// ---------------------------------------------------------------------------
lesson = logBanner("49. The while loop");
// ---------------------------------------------------------------------------

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// while loop
let rep = 1;
while (rep <= 5) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

// let die = Math.trunc(Math.random() * 6) + 1;
// console.log(die);

/**
 * Rolls a single six-sided die
 *
 * @returns {number} The roll value
 */
const roll = () => Math.trunc(Math.random() * 6) + 1;

let die = roll();

// Keep rolling until we roll a 6 ⚅
while (die !== 6) {
  console.log(`You rolled a ${die}`);
  die = roll();
  if (die === 6) console.log(`🎲 ⚅ ROLLED A ${die} ⚅ 🎲! Ending loop.`);
}

logAssignment(lesson);

/*
 * 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking
 *    and Continuing', but this time using a while loop (call the array
 *    percentages3).
 *
 * 2. Reflect on what solution you like better for this task: the for loop
 *    or the while loop?
 */

let percentages3 = [];
// for (let i = 0; i < populations.length; i++)
let i = 0;
while (i < populations.length) {
  console.log(
    `Population ${populations[i]} million is ${percentageOfWorld1(
      populations[i]
    )} percent of the world.`
  );
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}

// Test for mismatches...

// for (let i = 0; i < percentages3.length; i++) {
i = 0;
let test_status = "PASS";
while (i < percentages3.length) {
  // console.log(
  //   `percentages[${i}]: ${percentages[i]}\tpercentages3[${i}]: ${percentages3[i]}`
  // );
  if (percentages[i] === percentages3[i]) {
    test_status = "PASS";
    i++;
    continue;
  } else {
    test_status = "FAIL";
    console.log(
      `ERROR: percentages[${i}]: ${percentages[i]}\tpercentages3[${i}]: ${percentages3[i]}`
    );
  }
}
console.log(`${test_status}: All tests complete.`);

/*
 * CHALLENGE #4
 *
 * Let's improve Steven's tip calculator even more, this time using loops!
 *
 * Your tasks:
 *
 * 1. Create an array called bills containing all 10 test bill values.
 *
 * 2. Create empty arrays for the tips and the totals (tips and totals)
 *
 * 3. Use the calcTip function we wrote before (included in the starter code)
 *    to calculate tips and total values (bill + tip) for every bill value in
 *    the bills array. Use a for loop to perform the 10 calculations!
 *
 * TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.
 */
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
  console.log(
    `Bills[${i}]: $${bills[i]}, tip: $${tips[i]}, total: $${totals[i]}`
  );
}

/*
 * BONUS:
 *
 * Write a function calcAverage which takes an array called arr as an argument.
 * This function calculates the average of all numbers in the given array. This
 * is a DIFFICULT challenge (we haven't done this before)! Here is how to solve
 * it if you feel like it:
 *
 * 1. First, you will need to add up all values in the array. To do the
 *    addition, start by creating a variable sum that starts at 0. Then
 *    loop over the array using a for loop. In each iteration, add the
 *    current value to the sum variable. This way, by the end of the loop,
 *    you have all values added together.
 *
 * 2. To calculate the average, divide the sum you calculated before by the
 *    length of the array (because that's the number of elements).
 *
 * 3. Call the function with the totals array.
 *
 */
let calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(`Average of [1, 2, 3] = ${calcAverage([1, 2, 3])}`);
console.log(`Average of [${totals}] = ${calcAverage(totals)}`);
