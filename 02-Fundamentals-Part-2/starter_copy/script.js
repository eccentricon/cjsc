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
