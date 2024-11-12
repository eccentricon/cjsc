"use strict";

/**
 * Returns a divider string for use in banners using the specified
 * separator character repeated for the specified line length.
 *
 * @param {number} lineLength - The line length
 * @param {string} separator - The separator character
 * @returns {string} The divider string.
 */
function logDivider(lineLength, separator) {
  return separator.repeat(lineLength);
}

/**
 * Logs the specified banner text centered between two separator
 * lines.
 *
 * @param {string} text - The banner text
 */
function logBanner(text) {
  const lineLength = 60;
  const separator = "-";

  let header = "\n" + logDivider(lineLength, separator) + "\n";

  // Calculate padding on each side
  const padding = (lineLength - text.length) / 2;

  // Use padStart and padEnd to center the text
  header += " ".repeat(padding) + text + " ".repeat(padding) + "\n";

  header += logDivider(lineLength, separator);
  console.log(header);
}

/**
 * Logs an assignment banner using the given assignment title text.
 *
 * @param {string} text - the assignment title text
 */
function logAssignment(text) {
  console.log("\n*** ASSIGNMENT", text, "***");
}
