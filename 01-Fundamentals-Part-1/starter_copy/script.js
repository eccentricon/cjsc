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
  console.log("\n*** ASSIGNMENT", text, "***");
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

// ---------------------------------------------------------------------------
// 21. Truthy and falsey values
// ---------------------------------------------------------------------------
lesson = "21. Truthy and falsey values";
logBanner(lesson);

// 5 falsey values: 0, '', undefined, null, NaN
console.log(Boolean(0)); //         falsey
console.log(Boolean(undefined)); // falsey
console.log(Boolean("Jonas")); //   truthy
console.log(Boolean({})); //        truthy (empty object)
console.log(Boolean("")); //        falsey

const money = 0;
if (money) {
  console.log("Don't spend too much.");
} else {
  console.log("You should get a job!");
}

// let height; // undefined - falsey
// let height = 123; // truthy
let height = 0; // falsey!
if (height) {
  console.log("YAY! Height is defined.");
} else {
  console.log("Height is undefined.");
}

// ---------------------------------------------------------------------------
lesson = "22. Equality operators: == vs. ===";
// ---------------------------------------------------------------------------
logBanner(lesson);

age = 18;
if (age === 18) console.log("You are an adult!");

// loose equality: == (does type coercion)
// strict equality: === (NO type coercion)

age = "18";
if (age === 18) console.log("You are an adult! (strict)");
if (age == 18) console.log("You are an adult! (loose)");

// prompting for a value
// let favorite = prompt("What's your favorite number?");
// console.log(favorite, typeof favorite); // string!
// if (favorite === 23) {
//   // false!
//   console.log("Cool! 23 is an amazing number!");
// }

// better...

// favorite = Number(prompt("What's your favorite number?"));
favorite = 24;
if (favorite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log(`${favorite} is also a cool number!`);
} else if (favorite === 9) {
  console.log(`${favorite} is also a cool number!`);
} else {
  console.log("Number is not 23 or 7 or 9.");
}

// not equals
if (favorite !== 23) console.log("Why not try 23?");

logAssignment(lesson);

// 1. Declare a variable numNeighbours based on a prompt input like this:
//      prompt('How many neighbour countries does your contry have?');

// let numNeighbors = Number(
//   prompt("How many neighbor countries does your contry have?")
// );
// console.log(`numNeighbors: ${typeof numNeighbors} ${numNeighbors}`);

// 2. If there is only 1 neighbour, log to the console 'Only 1 border!'
//    (use loose equality == for now).
// if (numNeighbors === 1) console.log("Only 1 border!");

// 3. Use an else-if block to log 'More than 1 border' in case numNeighbours
//    is greater than 1.
// else if (numNeighbors >= 2) console.log("More than 1 border");

// 4. Use an else block to log 'No borders' (this block will be executed when
//    numNeighbours is 0 or any other value).
// else console.log("No borders");

// 5. Test the code with different values of numNeighbours, including 1 and 0.

// 6. Change == to ===, and test the code again, with the same values of
//    numNeighbours. Notice what happens when there is exactly 1 border!
//    Why is this happening?

// 7. Finally, convert numNeighbours to a number, and watch what happens now
//    when you input 1.

// 8. Reflect on why we should use the === operator and type conversion in
//    this situation.

// ---------------------------------------------------------------------------
lesson = "23. Boolean logic";
// ---------------------------------------------------------------------------
logBanner(lesson);

console.log(`
| AND   | true  | false |
| ----- | ----- | ----- |
| true  | true  | false |
| false | false | false |

| OR    | true  | false |
| ----- | ----- | ----- |
| true  | true  | true  |
| false | true  | false |

| NOT   | true  | false |
| ----- | ----- | ----- |
|       | false | true  |
`);

// ---------------------------------------------------------------------------
lesson = "24. Logical operators";
// ---------------------------------------------------------------------------
logBanner(lesson);

let hasDriversLicense = true;
let hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

let isTired = false;

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive.");
} else {
  console.log("Someone else should drive.");
}

logAssignment(lesson);

// 1. Comment out the previous code so the prompt doesn't get in the way.

// 2. Let's say Sarah is looking for a new country to live in. She wants
//    to live in a country that speaks English, has less than 50 million
//    people and is not an island.
console.log(`LANGUAGE: ${LANGUAGE}`);
console.log(`population: ${population}`);
console.log(`IS_ISLAND: ${IS_ISLAND}`);

// 3. Write an if statement to help Sarah figure out if your country is
//    right for her. You will need to write a condition that accounts for
//    all of Sarah's criteria. Take your time with this, and check part of
//    the solution if necessary.

let rightCountry = LANGUAGE === "English" && population < 50 && !IS_ISLAND;

// 4. If yours is the right country, log a strings like this 'You should
//    live in Portugal :)'. If not, log 'Portugal does not meet your
//    criteria :('.

if (rightCountry) {
  console.log(`You should live in ${COUNTRY} 😀`);
} else {
  console.log(`${COUNTRY} does not meet your criteria 🙁`);
}

// 5. Probably your country does not meet all the criteria. So go back and
//    temporarily change some variables in order to make the condition true
//    (unless you live in Canada :D).

// ---------------------------------------------------------------------------
lesson = "Coding Challenge #3";
// ---------------------------------------------------------------------------
logBanner(lesson);

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy! 
Your tasks: 

1. Calculate the average score for each team, using the test data below 

2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score) 

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks 😉 

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy 

Test data: 
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// Data 1: Dolphins
let dolphins1 = 96,
  dolphins2 = 108,
  dolphins3 = 89,
  koalas1 = 88,
  koalas2 = 91,
  koalas3 = 110;

// Data Bonus 1: Koalas
// let dolphins1 = 97,
//   dolphins2 = 112,
//   dolphins3 = 101,
//   koalas1 = 109,
//   koalas2 = 95,
//   koalas3 = 123;

// Data Bonus 2: Tie
// let dolphins1 = 97,
//   dolphins2 = 112,
//   dolphins3 = 101,
//   koalas1 = 109,
//   koalas2 = 95,
//   koalas3 = 106;

let scoreDolphins = (dolphins1 + dolphins2 + dolphins3) / 3;
let scoreKoalas = (koalas1 + koalas2 + koalas3) / 3;
const MIN_SCORE = 100;

console.log(`scoreDolphins: ${scoreDolphins}`);
console.log(`scoreKoalas: ${scoreKoalas}`);

if (scoreDolphins === scoreKoalas && scoreDolphins >= MIN_SCORE) {
  console.log("Both win the trophy");
} else if (scoreDolphins > scoreKoalas && scoreDolphins >= MIN_SCORE) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= MIN_SCORE) {
  console.log("Koalas win the trophy");
} else {
  console.log("Nobody wins.");
}

// ---------------------------------------------------------------------------
lesson = "26. The switch statement";
// ---------------------------------------------------------------------------
logBanner(lesson);

let day = "monday";

console.log("switch...");

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

// Rewrite using if/else
console.log("if/else...");

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}

logAssignment(lesson);

language = "english";
console.log(`Language: ${language}`);
switch (language) {
  // chinese or mandarin: 'MOST number of native speakers!';
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;

  // spanish: '2nd place in number of native speakers';
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;

  // english: '3rd place';
  case "english":
    console.log("3rd place");
    break;

  // hindi: 'Number 4';
  case "hindi":
    console.log("Number 4");
    break;

  // arabic: '5th most spoken language';
  case "arabic":
    console.log("5th most spoken language");
    break;

  // for all other simply log 'Great language too :D'.
  default:
    console.log("Great language too :D");
}

// ---------------------------------------------------------------------------
lesson = "28. The conditional (ternary) operator";
// ---------------------------------------------------------------------------
logBanner(lesson);

age = 17;
let drinker = "I like to drink wine! 🍷";
let nondrinker = "I like to drink water. 💧";
age >= 18 ? console.log(drinker) : console.log(nondrinker);

// ternary produces a value, so can be used as an expression.
drinker = "wine 🍷";
nondrinker = "water 💧";

console.log(`I like to drink ${age >= 18 ? drinker : nondrinker}!`);

// better...
let drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(`I like to drink ${drink}!`);

logAssignment(lesson);
/*
1.  If your country's population is greater than 33 million,
    use the ternary operator to log a string like this to the console: 
    "Portugal's population is above average". Otherwise, simply log 
    "Portugal's population is below average". Notice how only one word 
    change between these two sentences!
*/
const AVG_POP = 33;
let popHiLo = population > AVG_POP ? "above" : "below";
console.log(`${COUNTRY}'s population is ${popHiLo} average.`);

/*
2.  After checking the result, change the population temporarily 
    to 13 and then to 130. See the different results, and set the 
    population back to original.
*/

origPopulation = population;
country = "Fredonia";
population = 13;
popHiLo = population > AVG_POP ? "above" : "below";
console.log(
  `${country}'s population is ${popHiLo} average (${AVG_POP}M): ${population}M`
);
population = 130;
popHiLo = population > AVG_POP ? "above" : "below";
console.log(
  `${country}'s population is ${popHiLo} average (${AVG_POP}M): ${population}M`
);
population = origPopulation;

// ---------------------------------------------------------------------------
lesson = "Coding Challenge #4";
// ---------------------------------------------------------------------------
logBanner(lesson);

/*
Steven wants to build a very simple tip calculator for whenever he goes 
eating in a restaurant. In his country, it's usual to tip 15% if the bill
value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

1.  Calculate the tip, depending on the bill value. Create a variable 
    called 'tip' for this. It's not allowed to use an if/else statement 😅 
    (If it's easier for you, you can start with an if/else statement, and 
    then try to convert it to a ternary operator!) 

2.  Print a string to the console containing the bill value, the tip, and
    the final value (bill + tip). Example: “The bill was 275, the tip was 
    41.25, and the total value 316.25”

Test data: 
§ Data 1: Test for bill values 275, 40 and 430 

Hints: 
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2 
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉 
 
GOOD LUCK 😀
*/

let bill = 275;
// let bill = 40;
// let bill = 430;
const tipRate = bill >= 50 && bill <= 300 ? 15 : 20;
const tip = bill * (tipRate / 100);
const total = bill + tip;
// console.log(`The bill was 275, the tip was 41.25, and the total value 316.25`);
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`
);
