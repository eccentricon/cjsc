function logDivider() {
  const lineLength = 60;
  const separator = "-";
  console.log(separator.repeat(lineLength));
}
function logBanner(text) {
  const lineLength = 60;
  const separator = "-";

  console.log(separator.repeat(lineLength));

  // Calculate padding on each side
  const padding = (lineLength - text.length) / 2;

  // Use padStart and padEnd to center the text
  console.log(" ".repeat(padding) + text + " ".repeat(padding));

  console.log(separator.repeat(lineLength));
}
function logAssignment(text) {
  // logDivider();
  console.log("*** ASSIGNMENT", text, "***");
}
let lesson;

// ---------------------------------------------------------------------------
// 9. Variables and values
// ---------------------------------------------------------------------------
lesson = "9. Variables and values";
logBanner(lesson);

let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");
console.log(40 + 8 + 23 - 10);

logAssignment(lesson);
/*
 * 1.  Declare variables called country, continent and population and
 *     assign their values according to your own country (population in millions).
 * 2.  Log their values to the console.
 */

let country = "USA";
let continent = "North America";
let population = 346; // population in millions
console.log("country = ", country);
console.log("continent = ", continent);
console.log("population = ", population);

// ---------------------------------------------------------------------------
// 11. Data types
// ---------------------------------------------------------------------------
lesson = "11. Data types";
logBanner(lesson);
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true); // a boolean value
console.log(typeof javascriptIsFun); // a variable
console.log(typeof 23); // a number
console.log(typeof "Jonas"); // a string

// dynamic typing
javascriptIsFun = "YES!"; // now a string
console.log(typeof javascriptIsFun); // a variable

// undefined
let year;
console.log(typeof year); // undefined!
year = 1961;
console.log(typeof year);

console.log(typeof null); // reports 'object' (legacy bug!)

logAssignment(lesson);
/*
 * 1. Declare a variable called isIsland and set its value according to your country.
 *    The variable should hold a Boolean value. Also declare a variable language,
 *    but don't assign it any value yet.
 *
 * 2. Log the types of isIsland, population, country and language to the console.
 */
let isIsland = false;
let language;

console.log("isIsland:", typeof isIsland);
console.log("population:", typeof population);
console.log("country:", typeof country);
console.log("language:", language);

// ---------------------------------------------------------------------------
// 12. let, const, and var
// ---------------------------------------------------------------------------
lesson = "12. let, const, and var";
logBanner(lesson);

// let
let age = 30;
//... more code
age = 31; // mutate (change) the variable

// const
const birthYear = 1961;
//... more code
// birthYear = 1962; // !TypeError
// const job; // !SyntaxError - missing initializer

// var
var job = "programmer";
job = "teacher"; // `var` is mutable like `let`

// undeclared variables
lastName = "Osborne";
console.log(lastName); // this works!

logAssignment(lesson);
// 1. Set the value of `language` to the language spoken where you live (some countries
//    have multiple languages, but just choose one).
language = "English";

// 2. Think about which variables should be `const` variables (which values will never
//    change, and which might change?). Then, change these variables to `const`.
const LANGUAGE = language;
const COUNTRY = country;
const CONTINENT = continent;
const IS_ISLAND = isIsland;

console.log("LANGUAGE:", LANGUAGE);
console.log("COUNTRY:", COUNTRY);
console.log("CONTENENT:", CONTINENT);
console.log("IS_ISLAND:", IS_ISLAND);

// 3. Try to change one of the changed variables now, and observe what happens.
// IS_ISLAND = true; // !Uncaught TypeError: Assignment to constant variable.

// ---------------------------------------------------------------------------
// 13. Basic operators
// ---------------------------------------------------------------------------
lesson = "13. Basic operators";
logBanner(lesson);

const NOW = 2037;
const BIRTHYEAR_JONAS = 1991;
const BIRTHYEAR_SARAH = 2018;

// arithmetic operators
const AGE_JONAS = NOW - BIRTHYEAR_JONAS;
const AGE_SARAH = NOW - BIRTHYEAR_SARAH;
console.log(AGE_JONAS, AGE_SARAH);

console.log(
  AGE_JONAS * 2, // multiplication
  AGE_JONAS / 10, // division
  2 ** 3 // exponentiation
);

// string operator
const FIRST_NAME = "Jonas";
const LAST_NAME = "Schmedtmann";
console.log(FIRST_NAME + " " + LAST_NAME); // plus as concatenation

// compound assignment
let x = 10 + 5; // simple assignment (=)
x += 10; // x = x + 10 (25)
x *= 4;
console.log(x);

// increment/decrement
x++;
console.log(x);
x--;
x--;
console.log(x);

// comparison operators
console.log(AGE_JONAS > AGE_SARAH); // >, <, >=, <=
const IS_FULL_AGE = AGE_SARAH >= 18;
console.log(IS_FULL_AGE);

console.log(
  "Is Jonas older than Sarah?",
  NOW - BIRTHYEAR_JONAS > NOW - BIRTHYEAR_SARAH
);

logAssignment(lesson);
let msg =
  "1. If your country split in half, and each half would contain " +
  "half the population, then how many people would live in each half?\n";
console.log(msg, population / 2);

msg =
  "2. Increase the population of your country by " +
  "1 and log the result to the console.\n";
console.log(msg, population, "->", ++population);
population--;

msg =
  "3. Finland has a population of 6 million. Does your country " +
  "have more people than Finland?\n";
let finlandPopulation = 6;
console.log(msg, population > finlandPopulation);

msg =
  "4. The average population of a country is 33 million people. Does your " +
  "country have less people than the average country?\n";
let averagePopulation = 33;
console.log(msg, population < averagePopulation);

msg =
  "5. Based on the variables you created, create a new variable " +
  "description which contains a string with this format: 'Portugal " +
  "is in Europe, and its 11 million people speak portuguese'.\n";
let countryMsg = COUNTRY;
countryMsg += " is in ";
countryMsg += CONTINENT;
countryMsg += ", and its ";
countryMsg += population;
countryMsg += " million people speak ";
countryMsg += LANGUAGE + ".";
console.log(msg, countryMsg);
