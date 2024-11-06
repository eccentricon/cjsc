"use strict";

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
lesson = "32. Activating strict mode";
// ---------------------------------------------------------------------------
logBanner(lesson);

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // typo in variable name!
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio"; // Oops! Reserved (future) keyword
// const private = 534; // Oops! Reserved (future) keyword
