# Condition or Control Flows

A conditional statement is a type of control flow statement that allows you to execute different code blocks based on a specified condition.

- [Condition or Control Flows](#condition-or-control-flows)
  - [If/else statement](#ifelse-statement)
  - [Nested if/else](#nested-ifelse)
  - [logical operators](#logical-operators)
    - [AND Operator](#and-operator)
    - [OR Operator](#or-operator)
  - [Equality Operator](#equality-operator)
    - [Not Equal to](#not-equal-to)
  - [Ternary Operator](#ternary-operator)
  - [Switch statement](#switch-statement)
    - [Multiple case switch statement](#multiple-case-switch-statement)

## If/else statement

Suppose you want to perform one task or you want a block of code to run only if a specific condition is true.
The condition can be any expression that evaluates to a boolean value (either true or false). If the condition is true, the code inside the curly braces will be executed, and if it's false, the code inside the curly braces will be skipped.

```js
  const age = 16;
  if (age >= 16) {
  console. ('You can have voter card');
  } eLse {
  console. ('You cannot have voter card');
  }
```

Here is a basic example of a block of code that contains an if statement, multiple else if statements, and an else statement in case none of the conditions evaluated to true. JavaScript will attempt to run all the statements in order, and if none of them are successful, it will default to the else block.

For example:

```js
  // Set the current grade of the student
  let grade = 87;

  // Check if grade is an A, 8, C, D, or F
  if (grade >= 90) {
    console. ('A');
  } else if (grade >= 80) {
      console.log('B');
  } else if (grade >= 70) {
      console.log('C');
  } else if (grade >= 60) {
      console.log('D');
  } else {
      console.log('F');
  }

```

## Nested if/else

The inner if/else works only if the outer if statement is true, otherwise, it executes the outer else statement, this is called nested if else.

In the given example if height is less than 120, it executes the outer else statement and the task is completed without performing other if else statements. If the outer if statement is true, it starts to execute the inner if else statements.

Let’s look at the example:

```js
const height = 123;
let price = 0;

if (height >= 120) {
  console.log("you can ride rollercoster");
  const age = parseInt(prompt("your age"));

  if (age < 12) {
    console.log("pay $5");
    price += 5; // price = price + 5
  } else if (age <= 18) {
    console.log("pay $7");
    price += 7;
  } else {
    console.log("pay $8");
    price += 8;
  }

  const photos = prompt("do you want photos?");
  if (photos == "yes") {
    console.log("pay $5");
    price += 5;
    console.log("your total bill is", price);
  } else {
    console.log("thank you");
  }
} else {
  console.log("you can not ride rollercoster");
}
```

## logical operators

### AND Operator

It returns true if both of its operands are true, otherwise, it returns false.

```js
const x = 5;
const y = 20;
if (x > 10 && y > 10) {
  console.log("Both are greater than 10");
} else {
  console.log("One of them is less than 10");
}
```

### OR Operator

It returns true if one of its operands is true, otherwise, it returns false.

```js
const x = 5;
const y = 20;
if (x > 10 || y > 10) {
  console.log("Both are greater than 10");
} else {
  console.log("One of them is less than 10");
}
```

## Equality Operator

== VS ===

== (loose equality operator) checks for equality between two values after type coercion. It means that if the operands are of different types, JavaScript will attempt to convert them to a common type.

=== (strict equality operator) checks for equality between two values without type coercion. It means that if the operands are of different types, the result of the comparison will always be false.

Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another. This includes conversion from Number to String, String to Number, Boolean to Number etc. when different types of operators are applied to the values

Here is an example of how the == and === operators can produce different results:

```js
let x = 10;
let y = "10";
console.log(x == y); // true (Loose equality)
console.log(x === y); // false (strict equality)
```

In this example, x is a number and y is a string, but the loose equality operator == performs type coercion and considers them equal because their values are the same after coercion. On the other hand, the strict equality operator === does not perform type coercion and considers them unequal because they are of different types.
In general, it is recommended to use === instead of == to avoid unexpected type coercion results.

### Not Equal to

```js
//not equal to
let yl = 30;
let y2 = 20;
let res = yl != y2;
console.log(res); //true
let y3 = 50;
let y4 = "50";
let res2 = y3 != y4;
console.log(res2); //false, because "==" checks only data not its type
let res3 = y3 !== y4;
console.log(res3); //true, because "!==" it checks both typa and data
```

## Ternary Operator

The ternary operator, also known as the conditional operator, is used as shorthand for an if...else statement.
A ternary operator is written with the syntax of a question mark (?) followed by a colon (:), as demonstrated below.

"(condition) ? expression on true : expression on false"

In the above statement, the condition is written first, followed by a ?. The first expression will execute on true, and the second expression will execute on false. It is very similar to an if...else statement, with more compact syntax.

```js
//ternary operator: if else statement in one line
const age = 18;
const is_adult = age >= 18 ? "adult" : "child";
console.log(is_adult); //returns 'adult'
// if age is greater than or equal to 18, then is_adult is 'adult' else 'child'
```

## Switch statement

The "switch" statement in JavaScript is a control flow statement that allows you to choose from multiple alternatives based on the value of a specified expression (known as the "switch value"). It can be used as an alternative to a series of if-else statements.

Each case is a possible value for the expression being evaluated, and the code block following it will be executed if the expression matches the case value. The break statement is used to exit the switch statement, preventing any further execution of code within the switch. The default clause is optional and will be executed if none of the cases match the expression.

```js
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  default:
    console.log("Today is another day");
}
```

In this example, the expression being evaluated is the day variable. The switch statement checks each case value to see if it matches the value of day, and if it does, the code block following that case will be executed. In this example, since day is equal to "Monday", the output will be "Today is Monday".

There might be an occasion in which you will need to evaluate a range of values in a switch block, we can do this by setting our expression to true and doing an operation within each case statement. To make this easier to understand, we will use a familiar example. Now we can write that as a switch statement. Since we’re checking a range, we will perform the operation in each case to check if each expression is evaluating to true then break out of the statement once the requirements for true have been satisfied.

```js
let grade;
const score = parseFloat(prompt("Score"));

switch (true) {
  case score >= 90:
    grade = "A";
    console.log(grade);
    break;
  case score >= 80:
    grade = "B";
    console.log(grade);
    break;
  case score >= 70:
    grade = "C";
    console.log(grade);
    break;
  case score >= 60:
    grade = "D";
    console.log(grade);
    break;
  default:
    grade = "F";
    console.log(grade);
}
```

Program for a simple calculator

```js
let result;
// take the operator input
const operator = prompt("Enter operator ( either +, -, * or / ): ");

//take the operand input
const number1 = parseFloat(prompt("Enter first number: "));
const number2 = parseFloat(prompt("Enter second number: "));

switch (operator) {
  case "+":
    result = number1 + number2;
    console.log(`${number1} + ${number2} = ${result}`);
    break;

  case "-":
    result = number1 - number2;
    console.log(`${number1} - ${number2} = ${result}`);
    break;

  case "*":
    result = number1 * number2;
    console.log(`${number1} * ${number2} = ${result}`);
    break;

  case "/":
    result = number1 / number2;
    console.log(`${number1} / ${number2} = ${result}`);
    break;

  default:
    console.log("Invalid Operator");
    break;
}
```

Switch, array

```js
let weekdays = [
  "Sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
let current_date = new Date();
let weekday_value = current_date.getDay();
switch (weekday_value) {
  case 0: {
    console.log("Today is " + weekdays[weekday_value]);
    break;
  }
  case 1: {
    console.log("Today is " + weekdays[weekday_value]);
    break;
  }
  case 2: {
    console.log("Today is " + weekdays[weekday_value]);
    break;
  }
  case 3: {
    console.log("Today is " + weekdays[weekday_value]);
    break;
  }
  case 4: {
    console.log("Today is " + weekdays[weekday_value]);
    break;
  }
  case 5: {
    console.log("Today is " + weekdays[weekday_value]);
    break;
  }
  case 6: {
    console.log("Today is " + weekdays[weekday_value]);
    break;
  }
}
```

### Multiple case switch statement

You may encounter code in which multiple cases should have the same output. In order to accomplish this, you can use more than one case for each block of code.

In order to test this, we are going to make a small application matching the current month to the appropriate season. First, we will use the new Date() method to find a number corresponding to the current month, and apply that to the month variable.

For example:

```js
// Get number corresponding to the current month, with 0 being January and 11 being December
const month = new Date().getMonth();
switch (month) {
  // January, February, March
  case 0:
  case 1:
  case 2:
    console.log("Winter");
    break;

  // ApriL, May, June
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;

  // July, August, September

  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  // October, November, December
  case 9:
  case 10:
  case 11:
    console.log("Autumn");
    break;
  default:
    console.log("Something went wrong.");
}
```
