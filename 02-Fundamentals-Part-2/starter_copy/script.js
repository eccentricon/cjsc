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
