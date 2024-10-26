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
