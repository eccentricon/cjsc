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
 * Declare a variable called isIsland and set its value according to your country.
 * The variable should hold a Boolean value. Also declare a variable language,
 * but don't assign it any value yet.
 *
 * Log the types of isIsland, population, country and language to the console.
 */
let isIsland = false;
let language;

console.log("isIsland:", typeof isIsland);
console.log("population:", typeof population);
console.log("country:", typeof country);
console.log("language:", language);
