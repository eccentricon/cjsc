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
// lesson = logBanner("41. Coding challenge 2");
// ---------------------------------------------------------------------------
