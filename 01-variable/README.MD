# variable

Variables are those containers that store data values.

For example, a variable may be used to store a user’s email address or name.

A variable can contain any type of data, such as a string, a true or false Boolean, or a number.

A variable can be changed, depending on conditions or pieces of information passed to the program.

## Keywords: var, let, and const.

1. The var keyword is used in all JavaScript code from 1995 to 2015.
2. The let and const keywords were added to JavaScript in 2015.
3. If you want your code to run in the older browser you must use var.

## Ways to declare a variable

1. cannot start with a number, e.g.: 123 //error
2. cannot give space, e.g.: my name //error
3. can use an underscore, e.g.: my_name
4. can use camelCase, e.g.: myName
5. can start with underscore e.g.: \_myName
6. can start with ‘$’ e.g.: $name

```
  var message = "Hello World!"
  // In this example, the message variable is declared using the var keyword and is assigned the string value "Hello World!".
```

```
  // Declare a variable called "message" and assign it a string value
  let message = 'Hello, world!';

  // Log the value of message to the console
  console. log(message);

  // Reassign the value of "message" to a new string
  message = 'Goodbye, world!';

  // Log the new value of message to the console
  console.log(message);

  // Declare a constant called "PI" and assign it a numerical value
  const PI = 3.14159;

  // Attempt to reassign the value of PI (will result in an error)
  PI = 3.14;

```

In this example, we declare a variable called message and assign it a string value of "Hello, world!". We then log the value of message to the console using the console.log() method. We then reassign the value of message to a new string of "Goodbye, world!" and log this new value to the console.

We then declare a constant called PI and assign it a numerical value of 3.14159. Constants are similar to variables, but their values cannot be reassigned once they have been set. We demonstrate this by attempting to reassign the value of PI to 3.14, which results in an error.

Note that in modern JavaScript, it is recommended to use let and const instead of var for declaring variables.
