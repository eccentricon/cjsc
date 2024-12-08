<style>h1,h2,h3,h4,h5 {color: DarkSeaGreen;}</style>

# The Complete JavaScript Course 2024: From Zero to Expert!

- Jonas Schmedtmann: https://codingheroes.io/resources/
- Course: https://www.udemy.com/course/the-complete-javascript-course/
  - Assignments: https://codingheroes.io/assignments/instructions.html
    - Alternative: https://jonas.io/assignments/instructions.html
- Repo: https://github.com/eccentricon/cjsc

**Note:** On Mac, Control+Command+Spacebar (⌃⌘␣) to display emojis and symbols.

## Git moves

Push the changes in your local repository up to
the remote repository you specified as the origin.

```shell
$ git push -u origin master  # this project uses the old 'master'
```

Pull `master` branch from remote repo (`origin`)
into local repo `HEAD` branch (the commit that
is currently checked out in the working directory).

```
$ git pull origin master
```

# Section 2: JavaScript fundamentals - part 1

## 9. Values and variables

[Variable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variables) names:

- Only numbers, letters, underscore (`_`), dollar sign (`$`)
- Must not begin with a number
- Conventions:
  - `CamelCase` preferred
  - Start variables with `lowercaseLetters`
  - `UPPERCASE` for constants
- Can't use reserved keywords

## 10. Practice assignments

https://codingheroes.io/assignments/instructions.html

## 11. Data types

- 2 kinds of values:
  - **Object**
    ```
    let me = {
      name: 'Jonas'
    }
    ```
  - **Primitive** (_everything else that isn't an object_)
    ```
    let firstName = 'Jonas';
    let age = 30;
    ```

### 7 primitive data types

First three are the biggies (**Number**, **String**, and **Boolean**).

1. **Number** - Floating point numbers 👉 _Used for decimals and integers_\
   `let age = 23;`

2. **String** - Sequence of characters 👉 _Used for text; always quoted_\
   `let firstName = 'Jonas';`

3. **Boolean** - Logical type that can only be `true` or `false` 👉 _Used for making decisions_\
   `let fullAge = false;`

---

4. **Undefined** - Value of variable that's not yet defined ("empty value")\

   ```
   let children; // undefined
   ```

5. **Null** - Also means "empty value"

6. **Symbol** (ES2015) - Value that is unique and immutable 👉 _[Not useful for now]_

7. _BigInt_ (ES2020 - Larger integers that the Number type cannot hold

#### JavaScript has _dynamic typing_

- We do not have to manually define the data type of a value stored in a variable
- Data types are determined **automatically**
- THe **value** has a type, _NOT_ the variable

#### _typeof_ operator

The [`typeof`] operator returns a string indicating the type of the operand's value.

```
console.log(typeof true); // a boolean value
console.log(typeof javascriptIsFun); // a variable
console.log(typeof 23); // a number
console.log(typeof "Jonas"); // a string
```

## 12. _let_, _const_, and _var_

### let

Use `let` to declare variables that can change later.

```
let age = 30;
//... more code
age = 31; // mutate (change) the variable
```

### const

Use `const` to declare variables that _**cannot**_ change later.

```
const birthYear = 1961; // immutable
//... more code
birthYear = 1962; // ! TypeError
```

```
const job; // !SyntaxError - missing initializer
```

**ADVICE:** _Use `const` by default. Try to have a little mutation as possible in
your program._

### var

Avoid `var` - legacy convention. `let` block-scoped, and `var` is function-scoped (more on this
later).

```
var job = "programmer";
job = "teacher"; // `var` is mutable like `let`
```

### Undeclared variables

Undeclared variables are possible, but a _bad idea_.

```
lastName = "Osborne";
console.log(lastName); // this works!
```

Doesn't create a variable in the current scope. JavaScript will create a
property on the global object.

**ADVICE:** _Always properly declare variables._

## 13. Basic operators

### Arithmetic operators

All the usual [arithmetic operators] are available:

```
console.log(
  AGE_JONAS * 2, // multiplication
  AGE_JONAS / 10, // division
  2 ** 3 // exponentiation
);
```

### String concatenation (+)

`+` is a [string operator][string operators].

```
const FIRST_NAME = "Jonas";
const LAST_NAME = "Schmedtmann";
// plus as concatenation
console.log(FIRST_NAME + " " + LAST_NAME);
```

Template strings are a better way to do this.

### Compound assignment operators (+=, \*=, etc.)

```
let x = 10 + 5; // simple assignment (=)
x += 10; // x = x + 10 (25)
x *= 4;
console.log(x);
```

### Increment/decrement operators

```
x++;
console.log(x); // 101
x--;
x--;
console.log(x); // 99
```

### Comparison operators

```
console.log(AGE_JONAS > AGE_SARAH); // >, <, >=, <=
const IS_FULL_AGE = AGE_SARAH >= 18;
console.log(IS_FULL_AGE);

console.log(
  "Is Jonas older than Sarah?",
  NOW - BIRTHYEAR_JONAS > NOW - BIRTHYEAR_SARAH // operator precedence
);
```

## 14. Operator precedence

See MDN [operator precedence] table.

```
let a, b;
a = b = 25 - 10 - 5; // assignment lower precedence than subtraction
console.log(a, b); // 10 10
```

Use grouping (`(` `)`) to force precedence.

```
const AVG_AGE = AGE_JONAS + AGE_SARAH / 2;
console.log(AGE_JONAS, AGE_SARAH, AVG_AGE); // 55.5 ? No!

const AVERAGE_AGE = (AGE_JONAS + AGE_SARAH) / 2;
console.log(AGE_JONAS, AGE_SARAH, AVERAGE_AGE); // 32.5 Yes!
```

## 15. A note about challenges

[All Coding Challenges](course-material-v2.2/all-coding-challenges.pdf)

## 16. Coding challenge #1

(Solution review.)

## 17. Strings and template literals

- Enclose literal string in backticks (<code>`</code>).
- Interpolate variables and calculations in `${` and `}`.

  ```
  // Template literals
  const jonasNew = `I'm ${FIRST_NAME}, a ${NOW - BIRTHYEAR_JONAS} year old ${job}!`;
  console.log(jonasNew);
  ```

- You can use backticks to delimit any string:

  ```
  console.log(`Just a regular string...`); // no interpolation!
  ```

### Multi-line strings

Old way uses `\n` and `\` continuation:

```
// old way...
console.log("String with \n\
multiple \n\
lines."
);
```

New way uses backticks:

```
// new way...
console.log(`String with
multiple
lines.`);
```

## 18. Taking Decisions: if / else Statements

Term: _control structure_

```
age = 15;
const MIN_AGE = 18;
let isOldEnough = age >= MIN_AGE;
if (isOldEnough) {
  console.log("Sarah can get her driving license 🚗!");
} else {
  const YEARS_LEFT = MIN_AGE - age;
  console.log(`Sarah is too young. Wait another ${YEARS_LEFT} years :-)`);
}
```

## 19. Coding challenge #2

(Solution review)\
[All Coding Challenges](course-material-v2.2/all-coding-challenges.pdf)

## 20. Type conversion and coercion

- **conversion**: we manually convert from one type to another
- **coercion**: JS automatically converts types for us

### Type conversion

The `+` operator is concatenation when one of the operands is a string:

```
const inputYear = "1991"; // input values usually come in as strings
console.log(`inputYear = '${inputYear}'`);
console.log("inputYear + 18");
console.log(typeof (inputYear + 18), inputYear + 18); // ! '199118' not what we want
```

`Number()` converts it's argument to a number:

```
console.log(Number(inputYear), inputYear);
console.log(typeof (Number(inputYear) + 18), Number(inputYear) + 18); // Yes

console.log(Number("Jonas")); // NaN
```

`NaN` really means "invalid number" - it's still a number:

```
console.log(typeof NaN); // number
```

`String()` converts its argument to a string:

```
console.log(String("23") + 2); // '232'
```

Yes, there's also a `Boolean()` but booleans require special handling
(more on this later).

### Type coercion

- `+` coerces to `string` when one of its operands is a `string` (i.e. its concatenating)
- `-`, `*`, and `/` coerce to `number`

#### Examples

| Expression                              | Evaluates to          | Notes                                                        |
| --------------------------------------- | --------------------- | ------------------------------------------------------------ |
| `console.log("I am", 23, "years old");` | `'I am 23 years old'` | `23` coerced to string                                       |
| `"23" - "10" - 3`                       | `10`                  | `"23"` and `"10"` coerced to numbers                         |
| `"23" + "10" + 3`                       | `'23103'`             | `3` coerced to string                                        |
| `"23" + "10" + 3 + 5`                   | `'231035'`            | `3` and `5` coerced to strings because `+` is left-to-right  |
| `3 + 5 + "23" + "10"`                   | `'82310'`             | `8` (`3 + 5`) coerced to string because `+` is left-to-right |
| `"23" - "10" - "3"`                     | `10`                  | `"23"`, `"10"`, and `"3"` coerced to numbers                 |
| `"23" * "2"`                            | `46`                  | all coerced to numbers                                       |
| `"h" * 2`                               | `NaN`                 | `"h"` cannot be coerced                                      |

## 21. Truthy and falsey values

In addition to `false` there are **five _falsey_ values**:

1. `0`
2. `''` (empty string)
3. `undefined`
4. `null`
5. `NaN`

Everything else is **truthy**.

```
console.log(Boolean(0)); //         false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas")); //   true
console.log(Boolean({})); //        true (empty object)
console.log(Boolean("")); //        false
```

Using `Boolean()` is rare; conversion to Boolean almost always happens _implicitly_ (coercion),
in two scenarios:

1. Using logical operators/expressions (`==`, `!=`, etc.)
2. Logical context (e.g. the condition of an `if`-`else` statement)

## Equality operators: == vs. === <a id="strict-equality"></a>

```
if (age === 18) console.log("You are an adult!");
```

| Operator | Name                | Description                   |
| -------- | ------------------- | ----------------------------- |
| `===`    | **strict equality** | doesn't perform type coercion |
| `==`     | **loose equality**  | does type coercion            |

```
'18' == 18; // true
'18' === 18; // false
```

**ADVICE:** _For clean code, prefer `===` (strict equality)._

### Prompting for a value

`prompt()` prompts user for input and returns a _string_.

```
let favorite = prompt("What's your favorite number?");
console.log(favorite, typeof favorite); // string!
if (favorite === 23) { // false!
  console.log("Cool! 23 is an amazing number!");
}

// better...
favorite = Number(prompt("What's your favorite number?"));
// etc.
```

### else if chaining

```
favorite = Number(prompt("What's your favorite number?"));
if (favorite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log(`${favorite} is also a cool number!`);
} else if (favorite === 9) {
  console.log(`${favorite} is also a cool number!`);
} else {
  console.log("Number is not 23 or 7 or 9.");
}
```

### not equals

| Operator | Name                  | Description                   |
| -------- | --------------------- | ----------------------------- |
| `!==`    | **strict inequality** | doesn't perform type coercion |
| `!=`     | **loose inequality**  | does type coercion            |

## 23. Boolean logic

| AND     | `true`  | `false` |
| ------- | ------- | ------- |
| `true`  | `true`  | `false` |
| `false` | `false` | `false` |

| OR      | `true` | `false` |
| ------- | ------ | ------- |
| `true`  | `true` | `true`  |
| `false` | `true` | `false` |

| NOT | `true`  | `false` |
| --- | ------- | ------- |
|     | `false` | `true`  |

## 24. Logical operators

| Operator | Name            | Description                                    |
| -------- | --------------- | ---------------------------------------------- |
| `&&`     | **logical AND** | binary, `true` if _both_ operands are `true`   |
| `\|\|`   | **logical OR**  | binary, `true` if _either_ operand is `true`   |
| `!`      | **logical NOT** | unary, negates operand (and higher precedence) |

## 25. Coding challenge #3

(Solution review)\
[All Coding Challenges](course-material-v2.2/all-coding-challenges.pdf)

## 26. The switch statement

- `case` matches use strict equality comparisons (`===`)
- `case` blocks don't need braces
- Without `break`, `case` blocks fallthrough to next `case`

```
let day = "wednesday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break; // without break, fallthrough to next case
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
```

## 27. Statements and expressions

_expression_&mdash;a piece of code that produces a value

- `3 + 4`
- `1991`
- `true && false && !false`

_statement_&mdash;a bigger piece of code that

- performs an action
- does _not_ necessarily produce a value

## 28. The conditional (ternary) operator

```
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
```

## 29. Coding challenge #4

(Solution review)\
[All Coding Challenges](course-material-v2.2/all-coding-challenges.pdf)

## 30. JavaScript releases: ES5, ES6+, and ESNext

- ES6/ES2015 (ECMAScript 2015) was a biggie
- Yearly releases: ES2015, ES2016, ...ES2024
- "Don't break the web" - JavaScript is backward-compatible all the way back to ES1!
- It's not forwards-compatible!

### How to use modern JavaScript

1.  During development: Use the latest Chrome browser
2.  During production: Use [Babel] to transpile and polyfill your code (converting
    back to ES5 to ensure browser compatibility for all users)

- ES5
  - Fully supported in all browsers (down to IE 9 from 2011);
  - _Ready to be used today_ 👍
- "ES6+"

  - ES6/ES2015 ... ESxxx
  - ES6+: Well supported in all **modern** browsers;
  - No support in **older** browsers;
  - _Can use **most** features in production with transpiling and polyfilling_ 😃
  - [JavaScript compatability table]

- "ESNext"
  - ESNext: Future versions of the language (new feature proposals that reach Stage 4);
  - Can already use some features in production with transpiling and polyfilling.

### Modern JavaScript from the beginning

- 🔥 Learn modern JavaScript from the beginning!
- ☝ But, also learn how some things used to be done before modern JavaScript
  (e.g. `const` & `let` vs `var` and function constructors vs ES6 `class`).

3 reasons why we should not forget the Good Ol’ JavaScript:

- 👉 You will better understand how JavaScript actually works;
- 👉 Many tutorials and code you find online today are still in ES5;
- 👉 When working on old codebases, these will be written in ES5.

# Section 3: JavaScript fundamentals - part 2

## 31. Section intro

## 32. Activating strict mode

```
"use strict";
```

[Strict mode] makes several changes to normal JavaScript semantics:

- Eliminates some JavaScript silent errors by changing them to throw errors.
- Fixes mistakes that make it difficult for JavaScript engines to perform
  optimizations: strict mode code can sometimes be made to run faster than
  identical code that's not strict mode.
- Prohibits some syntax likely to be defined in future versions of ECMAScript.

Has to be the very first statement in the script file (comments are allowed).

For example

```
// "use strict";

// ...

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // typo in variable name!
if (hasDriversLicense) console.log("I can drive :D");

// Ugh! No output!
```

Turning on strict mode reveals `Uncaught ReferenceError: hasDriverLicense is not defined`.

## 33. Functions

```
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
```

- Synonymous: "{ _Calling_ | _Running_ | _Invoking_ }" a function.
- DRY programming principle - _"Don't Repeat Yourself"_

## 34. Function declarations vs. expressions

- "parameter" is the _placeholder_ in a function declaration
- "argument" is the _actual value_ supplied in a function call

- Function **declaration** - declare the function with `function` keyword.

  ```
  // a function declaration
  function calcAge1(birthYear) {
    const CURRENT_YEAR = 2024;
    return CURRENT_YEAR - birthYear;
  }
  let birthYear = 1961;
  console.log(
    `If you were born in ${birthYear}, your age is ${calcAge1(birthYear)}`
  );
  ```

- Function **expression** - Assign an _anonymous function_ to a variable.

  ```
  // a function expression
  const calcAge2 = function (birthYear) {
    const CURRENT_YEAR = 2024;
    return CURRENT_YEAR - birthYear;
  };

  // call calcAge2 in the same way
  console.log(
    `If you were born in ${birthYear}, your age is ${calcAge2(birthYear)}`
  );
  ```

What's the difference?

- You can call a function declaration _before_ the declaration appears in the code. (This works because of  
  _varible hoisting_.)

  ```
  let birthYear = 1961;
  // We can call calcAge1() before it's declared!
  console.log(
    `If you were born in ${birthYear}, your age is ${calcAge1(birthYear)}`
  );

  // a function declaration
  function calcAge1(birthYear) {
    const CURRENT_YEAR = 2024;
    return CURRENT_YEAR - birthYear;
  }
  ```

- Calling a variable assigned to a function _expression_ before it's defined:

  ```
    console.log(
    `If you were born in ${birthYear}, your age is ${calcAge2(birthYear)}`
  );
  ```

  `Uncaught ReferenceError: Cannot access 'calcAge2' before initialization`

## 35. Arrow functions

- A third way to define functions
- An alternative [function expression][arrow function expressions]
- No need for curly braces

```
const calcAge3 = (birthYear) => CURRENT_YEAR - birthYear;
```

```
// call calcAge3 in the same way
console.log(
  `If you were born in ${birthYear}, your age is ${calcAge3(birthYear)}`
);
```

Multiple parameters, and multiple statements are possible with arrow functions
too:

- Parentheses (`()`) around parameter list
- Braces (`{}`) around implementation

```
const yearsUntilRetirement = (birthYear, firstName) => {
  const RETIREMENT_AGE = 65;
  const AGE = calcAge3(birthYear);
  return `${firstName} can retire in ${RETIREMENT_AGE - AGE} years.`;
};
```

### 3 ways to define functions

So we now have three ways to define functions:

1. Function declarations
   ```
   function calcAge1(birthYear) {...}
   ```
2. Function expressions
   ```
   const calcAge2 = function (birthYear) {...}
   ```
3. Arrow functions
   ```
   const calcAge3 = (birthYear) => CURRENT_YEAR - birthYear;
   ```
   - Good for short, one-liners
   - Don't get a `this` (more on this later)

## 36. Functions calling other functions

```
const cutFruitPieces = function (fruit) {
  return fruit * 4;
};

function fruitProcessor36(apples, oranges) {
  const applePieces = cutFruitPieces(apples); // <= here
  const orangePieces = cutFruitPieces(oranges); // <= and here
  const juice =
    `Juice with ${applePieces} pieces of apple, ` +
    `and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor36(2, 3));
```

## 37. Reviewing functions

☝ Three different ways of writing functions, but they all work in asimilar way: receive input data, transform data, and then output data.

- 👉 **Function declaration**&mdash;Function that can be used before it’s
  declared.
  ```
  function calcAge(birthYear) {
    return 2037 - birthYear;
  }
  ```
- 👉 **Function expression**&mdash;Essentially a function value stored in a
  variable
  ```
  const calcAge = function (birthYear) {
    return 2037 - birthYear;
  }
  ```
- 👉 **Arrow function**&mdash;Great for a quick one-line functions. Has no `this`
  keyword (more later...)
  ```
  const calcAge = (birthYear) => 2037 - birthYear;
  ```

### Anatomy of a function

```
function calcAge(birthYear, firstName) {
  const age = 2037 - birthYear;
  console.log(`${firstName} is ${age} years old.`);
  return age;
}

const age = calcAge(1991, 'Jonas');
```

- **Function name:** (e.g. `calcAge`).
- **Parameters:** placeholders to receive input values. Like local
  variables of a function (e.g. `birthYear` and `firstName`).
- **Function body:** block of code that we want to reuse. Processes the
  function’s input data (e.g. everything inside `{` and `}`).
- **`return` statement:** output a value from the function and
  terminate execution (e.g. `return age;`).
- **Variable:** to save returned value (function output)
  (e.g. `age` in `const age = calcAge(1991, 'Jonas');`).
- **Arguments:** actual values of function parameters, to input data (e.g. `1991` and `'Jonas'`).
- **Calling:** (a.k.a. "running" or "invoking") the function, using `()`

## 38. Coding challenge #1

(Solution review)\
[All Coding Challenges](course-material-v2.2/all-coding-challenges.pdf)

## 39. Introduction to arrays

### Defining arrays

Two ways to define:

- Array literal syntax

  ```
  const friends = ["Michael", "Steven", "Peter"];
  ```

- Array constructor syntax

  ```
  const years = new Array(1991, 1984, 2008, 2020);
  ```

> **NOTE:** While `const` prevents redefining the `friends` variable,
> you can still change individual _elements_ of `friends`:
>
> ```
> friends[0] = "Ted";        // OK
> friends = ["Ted", "Jim"];  // error!
> ```

### Accessing array elements

```
console.log(friends[0]); // "Michael"
console.log(friends[2]); // "Peter"
```

### Array length

Use the `length` _property_ of the array object:

```
console.log(`friends has ${friends.length} elements.`);
```

Last element:

```
console.log(friends[friends.length - 1]); // last element
```

### Mutating an array

_Elements_ within an array are mutable, even when the array object is a `const`:

```
const friends = ["Michael", "Steven", "Peter"];
// ...
friends[2] = "Jay"; // OK
console.log(friends); // ['Michael', 'Steven', 'Jay']

// friends = ["Bob", "Alice"]; // Error!
```

### Mixed array element types

Mixed types are possible:

```
let mixedArray = [10, "hello", true, { name: "Alice" }];
```

This array includes a number, a string, a boolean, and an object.

```
const fname = "Jonas";
const jonas = [fname, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas); // ['Jonas', 'Schmedtmann', 46, 'teacher', Array(3)]
```

Elements can be variables (`fname`), expressions (`2037 - 1991`), and even
nested arrays (`friends`).

## 40. Basic array operations

See [Array] object docs.

### Array methods

#### push()

Adds one or more elements to the **end** of an array, and
returns the new length of the array.

```
console.log(friends); // ['Michael', 'Steven', 'Peter']
const newLength = friends.push("Jay");
console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']
console.log(newLength); // 4
```

#### unshift()

Adds one or more elements to the **front** of an array, and
returns the new length of the array.

```
friends.unshift("John");
console.log(friends); // ['John', 'Michael', 'Steven', 'Peter', 'Jay']
```

#### pop()

Removes the last element from an array and returns that element.

```
const popped = friends.pop();
console.log(popped); // 'Jay'
console.log(friends); // ['John', 'Michael', 'Steven', 'Peter']
```

#### shift()

Removes the first element from an array and returns that element.

```
const shifted = friends.shift();
console.log(shifted); // 'John'
console.log(friends); // ['Michael', 'Steven', 'Peter']
```

#### indexOf()

Returns the first (least) index at which a given element can be
found in the calling array.

```
console.log(friends.indexOf("Steven")); // 1
console.log(friends.indexOf("Bob")); // -1
```

#### includes()

Determines whether the calling array contains a value, returning
`true` or `false` as appropriate. Comparison uses
[strict equality](#strict-equality).

```
console.log(friends.includes("Steven")); // true
console.log(friends.includes("Bob")); // false
friends.push(23);
console.log(friends.includes("23")); // false, strict equality

if (friends.includes("Steven")) console.log("You have a friend named Steven.");
```

## 41. Coding challenge #2

(Solution review)\
[All Coding Challenges](course-material-v2.2/all-coding-challenges.pdf)

## 42. Introduction to objects

Collection of key-value pairs, where the key is called a "_property_".

### Object literal syntax

```
const jonas2 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
```

## 43. Dot vs. bracket notation

Two ways to access properties:

- Dot notation ("member access" - `.`)

  ```
  console.log(jonas2.lastName); // Dot notation
  ```

- Bracket notation ("computed member access" - `[]`)

  ```
  console.log(jonas2["lastName"]); // Bracket notation
  ```

With bracket notaton, field names can be computed. For example:

```
const nameKey = "Name";
console.log(jonas2[`first${nameKey}`], jonas2[`last${nameKey}`]);
```

### Accessing non-existent properties

No error, but value is [`undefined`](#7-primitive-data-types)

```
// Non-existent properties are 'undefined' (falsey)
if (jonas2[interestedIn]) {
  console.log(`${interestedIn}: ${jonas2[interestedIn]}`);
} else {
  console.log(`Unknown property: '${interestedIn}'`);
}
```

### Adding new properties

Both notations work.

```
jonas2.location = "Portugal";
jonas2["twitter"] = "@jonasschmedtman";
console.log(jonas2);
```

### Member access precedence

```
// Challenge:
// Print "Jonas has 3 friends, and his best friend is Michael."
let outString = `${jonas2.firstName} has `;
outString += `${jonas2.friends.length} friends, `;
outString += `and his best friend is ${jonas2.friends[0]}.`;
console.log(outString);
```

- `${jonas2.friends.length}` works because the [operator precedence] for
  the member access operator (`x.y`) is **left-to-right**.
- `${jonas2.friends[0]}` works for the same reason.

## 44. Object methods

```
const jonas3 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  calcAge: function (birthYear) {
    return new Date().getFullYear() - birthYear;
  },
};
console.log(jonas3.calcAge(1991)); // dot notation
console.log(jonas3["calcAge"](1991)); // bracket notation
```

### _this_ keyword

```
const jonas3 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  calcAge: function () {
    console.log(this);
    return new Date().getFullYear() - this.birthYear;
  },
};
console.log(jonas3.calcAge());
```

### Method adds new property

The following is inefficient:

```
console.log(jonas3.calcAge());
console.log(jonas3.calcAge());
console.log(jonas3.calcAge());
console.log(jonas3.calcAge());
```

Better: have the method store the calculated age as a new
property:

```
const jonas3 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    // Create a new property 'age'
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
  },

};
console.log(jonas3.calcAge()); // initialize once
console.log(jonas3.age); // access computed value
console.log(jonas3.age);
console.log(jonas3.age);
```

## 45. Coding challenge #3

(Solution review)\
[All Coding Challenges](course-material-v2.2/all-coding-challenges.pdf)

## 46. The for loop

```
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
```

## 47. Looping arrays, breaking, and continuing

```
for (let i = 0; i < jonasArray.length; i++) {
  console.log(`Element ${i}: ${jonasArray[i]}`);
}
```

### `continue` and `break`

- `continue` terminates execution of the statements in the current iteration
  of the current or labeled loop, and continues execution of the loop with the
  next iteration.
- `break` terminates the current loop or `switch` statement and transfers
  program control to the statement following the terminated statement. It can
  also be used to jump past a labeled statement when used within that labeled
  statement.

```
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
```

## 48. Looping backwards and loops in loops

### Loop backwards

```
for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(`Element ${i}: ${jonasArray[i]}`);
}
```

### Nested looping

```
// 3 exercises, 5 reps each
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`----- Starting exercise ${exercise}`);
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`\t🏋️‍♀️ Exercise ${exercise}, repitition ${rep}`);
  }
}
```

## 49. The while loop

```
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
```

<!-- ---------------------------------------------------------------------- ->
<!-- Reference links -->

[arithmetic operators]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#arithmetic_operators
[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[arrow function expressions]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
[Babel]: https://babeljs.io/
[JavaScript compatability table]: https://compat-table.github.io/compat-table/es6/
[operator precedence]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table
[strict mode]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
[string operators]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#string_operators
[`typeof`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
