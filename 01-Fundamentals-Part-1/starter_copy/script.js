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
const BIRTHYEAR = 1961;
//... more code
// BIRTHYEAR = 1962; // !TypeError
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

// ---------------------------------------------------------------------------
// 14. Operator precedence
// ---------------------------------------------------------------------------
lesson = "14. Operator precedence";
logBanner(lesson);

let a, b;
a = b = 25 - 10 - 5;
console.log(a, b);

const AVG_AGE = AGE_JONAS + AGE_SARAH / 2;
console.log(AGE_JONAS, AGE_SARAH, AVG_AGE); // 55.5 ? No!

const AVERAGE_AGE = (AGE_JONAS + AGE_SARAH) / 2;
console.log(AGE_JONAS, AGE_SARAH, AVERAGE_AGE); // 32.5 Yes!

// ---------------------------------------------------------------------------
// Coding Challenge #1
// ---------------------------------------------------------------------------
lesson = "Coding Challenge #1";
logBanner(lesson);

/*
CHALLENGE #1

Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula: BMI = mass / (height * height) (mass in kg and 
height in meters).

Your task is to write some code to help them:

1. Store Mark's and John's mass and height in variables called massMark, 
   heightMark, massJohn and heightJohn.

2. Calculate both their BMIs using the formula, and store the results in two 
   variables called BMIMark and BMIJohn.

3. Log the value of BMIMark and BMIJohn to the console.

4. BONUS: Create a boolean variable markHigherBMI containing information about 
   whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is
1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is
1.76 m tall.

 */

// Test data 1:
let massMark = 78; // mass in kg
let heightMark = 1.69; // height in meters
let massJohn = 92;
let heightJohn = 1.95;

// Test data 2:
// let massMark = 95; // mass in kg
// let heightMark = 1.88; // height in meters
// let massJohn = 85;
// let heightJohn = 1.76;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log("BMIMark:", BMIMark);
console.log("BMIJohn:", BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log("markHigherBMI:", markHigherBMI);

// ---------------------------------------------------------------------------
// 17. Strings and template literals
// ---------------------------------------------------------------------------
lesson = "17. Strings and template literals";
logBanner(lesson);

console.log(FIRST_NAME, job, BIRTHYEAR_JONAS, NOW);

const jonas =
  "I'm " +
  FIRST_NAME +
  ", a " +
  (NOW - BIRTHYEAR_JONAS) +
  " year old " +
  job +
  "!";

console.log(jonas);

// Template strings
const jonasNew = `I'm ${FIRST_NAME}, a ${
  NOW - BIRTHYEAR_JONAS
} year old ${job}!`;
console.log(jonasNew);

// Backticks for regular strings
console.log(`Just a regular string...`);

// Multi-line strings
// old way...
console.log(
  "String with \n\
multiple \n\
lines."
);

// new way...
console.log(`String with
multiple
lines.`);

logAssignment(lesson);
// Recreate the description variable from the last assignment,
// this time using the template literal syntax.

// let countryMsg = COUNTRY;
// countryMsg += " is in ";
// countryMsg += CONTINENT;
// countryMsg += ", and its ";
// countryMsg += population;
// countryMsg += " million people speak ";
// countryMsg += LANGUAGE + ".";
// console.log(msg, countryMsg);

const COUNTRY_MSG =
  `${COUNTRY} is in ${CONTINENT}, and ` +
  `its ${population} million people speak ${LANGUAGE}.`;

console.log(COUNTRY_MSG);

// ---------------------------------------------------------------------------
// 18. Taking Decisions: if / else Statements
// ---------------------------------------------------------------------------
lesson = "18. Taking Decisions: if / else Statements";
logBanner(lesson);

age = 15;
const MIN_AGE = 18;
let isOldEnough = age >= MIN_AGE;
if (isOldEnough) {
  console.log("Sarah can get her driving license 🚗!");
} else {
  const YEARS_LEFT = MIN_AGE - age;
  console.log(`Sarah is too young. Wait another ${YEARS_LEFT} years :-)`);
}

const BIRTH_YEAR = 2012;
let century;
if (BIRTH_YEAR <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log("Century:", century);

// ---------------------------------------------------------------------------
// Coding Challenge #2
// ---------------------------------------------------------------------------
lesson = "Coding Challenge #2";
logBanner(lesson);
console.log(BMIMark, BMIJohn);

// Print a nice output to the console, telling the user who has the
// higher BMI. The message can be either:
// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

let high = "Mark";
let low = "John";
if (BMIMark < BMIJohn) {
  high = "John";
  low = "Mark";
}
console.log(`${high}'s BMI is higher than ${low}'s!`);

// Modify the outputs above to use template literals to include the BMI
// values in the outputs.
// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or
// "John's BMI (29.1) is higher than Mark's (27)!".
let highBMI = BMIMark;
let lowBMI = BMIJohn;
if (BMIMark < BMIJohn) {
  high = "John";
  highBMI = BMIJohn;
  low = "Mark";
  lowBMI = BMIMark;
}
console.log(`${high}'s BMI (${highBMI}) is higher than ${low}'s (${lowBMI})!`);

// ---------------------------------------------------------------------------
// 20. Type conversion and coercion
// ---------------------------------------------------------------------------
lesson = "20. Type conversion and coercion";
logBanner(lesson);

// Type conversion
const inputYear = "1991"; // input values usually come in as strings
console.log(`inputYear = '${inputYear}'`);
console.log("inputYear + 18");
console.log(typeof (inputYear + 18), inputYear + 18); // ! '199118' not what we want
console.log(Number(inputYear), inputYear);
console.log(typeof (Number(inputYear) + 18), Number(inputYear) + 18); // Yes

console.log(Number("Jonas")); // NaN

// NaN really means "invalid number" - it's still a number
console.log(typeof NaN); // number

console.log(Number("Jonas") + 18); // NaN + a number is still NaN

console.log(String("23") + 2); // '232'

// Type coercion
console.log("I am", 23, "years old"); // 23 coerced to string
console.log("23" - "10" - 3); // 10: 23 and 10 coerced to numbers
console.log("23" + "10" + 3); // '23103': 3 coerced to string
console.log("23" + "10" + 3 + 5); // '231035': 3 and 5 coerced to strings
// because '+' is left-to-right eval
console.log(3 + 5 + "23" + "10"); // '82310': 8 (3 + 5) coerced to string
// because '+' is left-to-right eval
console.log("23" - "10" - "3"); // 10: 23, 10, and 3 coerced to numbers
console.log("23" * "2"); // 46: coerced to numbers
console.log("h" * 3); // NaN

logAssignment(lesson);
console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> '617'
console.log("19" - "13" + 17); // -> 23
console.log("123" < 57); // -> false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143
