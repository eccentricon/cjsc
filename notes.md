<style>h1,h2,h3,h4,h5 {color: DarkSeaGreen;}</style>

# The Complete JavaScript Course 2024: From Zero to Expert!

- Jonas Schmedtmann: https://codingheroes.io/resources/
- Course: https://www.udemy.com/course/the-complete-javascript-course/
  - Assignments: https://codingheroes.io/assignments/instructions.html
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

## Equality operators: == vs. ===

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

<!-- ---------------------------------------------------------------------- ->
<!-- Reference links -->

[arithmetic operators]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#arithmetic_operators
[operator precedence]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table
[string operators]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#string_operators
[`typeof`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
