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
   `let children;`

5. **Null** - Also means "empty value"

6. **Symbol** (ES2015) - Value that is unique and immutable 👉 _[Not useful for now]_

7. _BigInt_ (ES2020 - Larger integers that the Number type cannot hold

#### JavaScript has _dynamic typing_

- We do not have to manually define the data type of a value stored in a variable
- Data types are determined **automatically**
- THe **value** has a type, _NOT_ the variable

#### _typeof_ operator

The [`typeof`] operator returns a string indicating the type of the operand's value.

<!-- Reference links -->

[`typeof`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
