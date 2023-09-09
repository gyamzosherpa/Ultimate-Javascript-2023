# FUNCTION

- [FUNCTION](#function)
  - [function definition](#function-definition)
  - [Parameters and Arguments](#parameters-and-arguments)
  - [The arguments object](#the-arguments-object)
  - [Function with a return statement or return value](#function-with-a-return-statement-or-return-value)
    - [some common uses of the return statement](#some-common-uses-of-the-return-statement)
  - [IIFE: Immediately Invoked Function Expression](#iife-immediately-invoked-function-expression)
    - [Common uses of Immediately Invoked Function Expressions (IIFEs)](#common-uses-of-immediately-invoked-function-expressions-iifes)
  - [Anonymous Function or function expression](#anonymous-function-or-function-expression)
  - [Arrow Function](#arrow-function)
    - [Default parameters](#default-parameters)
  - [Higher order Functions(HOF)](#higher-order-functionshof)
    - [Built-in Higher order functions](#built-in-higher-order-functions)
      - [forEach()](#foreach)
      - [map()](#map)
      - [filter()](#filter)
      - [reduce()](#reduce)
      - [find()](#find)
      - [findIndex()](#findindex)
      - [some()](#some)
      - [every()](#every)
  - [JavaScript functions as first-class citizens](#javascript-functions-as-first-class-citizens)
  - [use strict](#use-strict)
  - [this keyword](#this-keyword)

## function definition

The function is a block of code to perform a specific task. So, you don’t have to write the code for the same task again and again but create a function and call it wherever the task needed to be performed. “function” is a keyword to create a function.

![Alt text](images/function.jpg)

```js
//function with no parameters
function hello() {
  console.log("Hello World");
}
//calling the function, we can call the functin many times as we want
hello();
hello();

// it return 'Hello World' twice
```

## Parameters and Arguments

`code`

```js
function greet(name) {
  console.log("Hello", +name + "!");
}

let userName = "John Doe";
greet(userName); // Hello, John Doe!
```

In this example, the greet function takes a single parameter, name, which is used to receive the value passed to the function when it is called. The userName variable is defined to store the string "John Doe", which is then passed as an argument to the greet function when it is called on the last line of the code

Example: `code`

```js
function multiply(num) {
  for (i = 1; i <= 10; i++) {
    console.log(`${num} × ${i} = ${num * i}`); // hold alt + enter 0215 to insert into symbol
  }
}
multiply(2);
multiply(3);
```

## The arguments object

In JavaScript, every function has a special object called the arguments object, which provides access to the arguments passed to the function. The arguments object in JavaScript is an array-like object accessible inside functions that contain the values of the arguments passed to that function. By using an argument object, you don’t need to define parameters.

Here's an example `code`:

```js
function sum() {
  let result = 0;

  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
  console.log(sum(1, 2, 3, 4, 5));
}
```

In this example, the sum function takes an indefinite number of arguments and uses the arguments object to access their values. The arguments.length property provides the number of arguments passed to the function, and the arguments[i] syntax is used to access the value of the i-th argument. The sum function adds up all the arguments and returns the result.

## Function with a return statement or return value

The return statement ends function execution and specifies a value to be returned to the function caller. When a return statement is used in a function body, the execution of the function is stopped.

### some common uses of the return statement

`Returning a value from a function`

Functions can perform calculations and return the result back to the caller using the return statement. This allows the result to be used by other parts of the program.

`code`

```js
// Returning a value from a function
function multiply(num1, num2) {
  return num1 * num2;
}

let result = multiply(5, 10);
console.log(result); // Output: 50
```

In this example, the multiply function takes two arguments num1 and num2 and multiplies them together using the \* operator. It then uses the return statement to return the result of the multiplication back to the caller of the function.

We can then call the multiply function and assign the returned value to a variable result, which we then log to the console. The output will be 50, which is the result of multiplying 5 and 10.

By using the return statement in this way, we can make our functions more flexible and reusable, as the returned value can be used by other parts of the program for further computation or to make decisions based on the result.

`Terminating a function early`

If a function encounters an error condition or unexpected input, it can use the return statement to terminate the function early and return an error message or null value back to the caller.

`code`

```js
// terminating a function early
function divide(num1, num2) {
  {
    if (num2 === 0) {
      return null; // Return null if denominator is zero
    }
    return num1 / num2;
  }
}
let result1 = divide(10, 2);
console.log(result1); // Output: 5

let result2 = divide(10, 0);
console.log(result2); // Output: null
```

In this example, the divide function takes two arguments num1 and num2 and divides num1 by num2. However, if num2 is equal to 0, the function uses the return statement to exit early and return null.

We can then call the divide function with different arguments to test its behavior. The first call to divide with arguments 10 and 2 will return 5, which is the correct result. The second call to divide with arguments 10 and 0 will return null, indicating that the division by zero was not allowed and the function terminated early.

`Breaking out of a loop`

Inside a loop, a return statement can be used to break out of the loop early and return a result.

`code`

```js
// breaking out of loop
function findFirstPositive(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      return numbers[i]; // Return the first positive number
    }
  }

  return null; // Return null if no positive number is found
}

let numbers1 = [-5, 3, 7, -2, 0];
let result1 = findFirstPositive(numbers1);
console.log(result1); // Output: 3

let numbers2 = [-5, -3, -7, -2, 0];
let result2 = findFirstPositive(numbers2);
console.log(result2); // Output: null
```

In this example, the findFirstPositive function takes an array of numbers as an argument and searches for the first positive number in the array. It uses a for loop to iterate through the array, and if it finds a positive number, it uses the return statement to exit the loop early and return the positive number back to the caller of the function.

We can then call the findFirstPositive function with different arrays to test its behavior. The first call to findFirstPositive with an array containing both positive and negative numbers will return 3, which is the first positive number in the array. The second call to findFirstPositive with an array containing only negative numbers and zero will return null, indicating that no positive number was found in the array.

`Returning multiple values`

In some programming languages, a function can return multiple values using the return statement, separated by commas.

`code`

```js
// Returning multiple values
function calculateStats(numbers) {
  let sum = 0;

  let min = numbers[0];

  let max = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if (numbers[i] < min) {
      min = numbers[i];
    }

    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  let avg = sum / numbers.length;
  return [sum, avg, min, max];
}
let numbers = [2, 5, 1, 10, 7];
let [sum, avg, min, max] = calculateStats(numbers);
console.log(`Sum: ${sum}, Avg: ${avg}, Min: ${min}, Max: ${max}`);
// Output: Sum: 25, Avg: 5, Min: 1, Max: 10
```

In this example, the calculateStats function takes an array of numbers as an argument and calculates the sum, average, minimum, and maximum values of the array. It then returns an array containing these four values using the return statement.

We can then call the calculateStats function and use array destructuring to assign the returned values to individual variables. We can then log these values to the console to display the result. The output will be Sum: 25, Avg: 5, Min: 1, Max: 10, which is the sum, average, minimum, and maximum values of the numbers array.

## IIFE: Immediately Invoked Function Expression

An Immediately Invoked Function Expression (IIFE) is a self-executing anonymous function in JavaScript. It runs automatically as soon as it is defined and can't be re-invoked later. IIFEs are commonly used to create a private scope for variables and functions, avoiding polluting the global scope and conflicts with other variables with the same names.

`code IIFE`

```js
// IIFE are the function defined as a expression and executed immediately after creation
let result = (function (a, b) {
  return a + b;
})(1, 2);
console.log(result); //returns 3
```

### Common uses of Immediately Invoked Function Expressions (IIFEs)

`Isolating variables and functions`

IIFEs allow you to create a new scope and isolate variables and functions from the global scope. This can help to prevent variable and function name collisions, especially when working on large projects with many contributors.

`code`

```js
(function () {
  let message = "Hello, World!";
  function printMessage() {
    console.log(message);
  }
  printMessage();
})();
console.log(message); //referenceError: message is not defined
```

"In this example, an anonymous function is defined and immediately invoked as an IIFE. The function contains a let statement, which defines a local variable message, and a function printMessage, which prints the value of message to the console. The printMessage function is called within the IIFE, causing the value of message to be printed to the console.

After the IIFE is executed, an attempt is made to access the message variable from the global scope, but a ReferenceError is thrown because the message variable is not defined in the global scope. This demonstrates how the IIFE can be used to isolate variables and functions from the global scope."

`Encapsulating code`

IIFEs allow you to encapsulate code and data within a single unit, making it easier to understand and maintain.

`code`

```js
let add = (function () {
  let counter = 0;
  return function () {
    return (counter += 1);
  };
})();
console.log(add()); //1
console.log(add()); //2
console.log(add()); //3
```

"In this example, an IIFE returns a function that adds 1 to a counter each time it is called. The counter is defined within the IIFE and is not accessible from the outside. The returned function is assigned to the add variable in the global scope, making it accessible to the rest of the code.

When the add function is called multiple times, it returns the value of the counter, which is incremented each time the function is called. This demonstrates how the IIFE can be used to encapsulate code and data within a single unit, making it easier to understand and maintain."

`Hiding implementation details`

IIFEs allow you to hide the implementation details of your code, making it more secure and less prone to tampering.

`code`

```js
let calculator = (function () {
  let result = 0;

  return {
    add: function (num) {
      result += num;
    },
    subtract: function (num) {
      result -= num;
    },
    getResult: function () {
      return result;
    },
  };
})();

calculator.add(10);
calculator.subtract(5);

console.log(calculator.getResult()); // 5
console.log(calculator.result); // undefined
```

"In this example, an IIFE returns an object with several methods for performing basic arithmetic operations. The result variable, which stores the current value of the calculator, is defined within the IIFE and is not accessible from the outside."

"The methods add, subtract, and getResult are exposed in the returned object, making them accessible from the outside. The methods can be used to perform arithmetic operations on the result variable, but the actual implementation details of the calculation are hidden within the IIFE."

"When the code is executed, the getResult method is called to retrieve the current value of the calculator, but an attempt to access the result variable directly from the global scope results in an undefined value. This demonstrates how the IIFE can be used to hide implementation details and make code more secure and less prone to tampering."

`Sharing data between scripts`

IIFEs allow you to share data between scripts in a controlled and secure manner, which is useful when working with third-party libraries.

`code`

```js
//first file name script.js
let data = (function () {
  let data = {};

  return {
    setData: function (key, value) {
      data[key] = value;
    },
    getData: function (key) {
      return data[key];
    },
  };
})();

//another file name: script2.js
data.setData("message", "Hello, World");
console.log(data.getData("message")); // "Hello World"
```

"In this example, an IIFE is used to create a singleton object, data, that can be shared between scripts. The object contains methods setData and getData, which can be used to set and retrieve data stored in the data object.
The first script, script1.js, defines the data object. The second script, script2.js, uses the data object to set and retrieve data.

Since the data object is defined as an IIFE, it can be included in multiple scripts and will always reference the same data. This makes it possible to share data between scripts, even if the scripts are loaded asynchronously or in a different order."

## Anonymous Function or function expression

An anonymous function is a function that is declared without a named identifier. It is often used as a function expression and assigned to a variable, or passed as an argument to another function.

`code`

```js
//function expression
let multiply = function (num1, num2) {
  return num1 * num2;
};

let result = multiply(5, 10);
console.log(result); // Output: 50
```

In this example, we define a function multiply using a function expression. We start by declaring a variable multiply and assigning it a function that takes two arguments num1 and num2 and multiplies them together using the \* operator. Note that we don't use the function keyword to define the function; instead, we use an anonymous function expression (a function without a name) that is assigned to the multiply variable.

We can then call the multiply function using the variable name and passing it the two arguments 5 and 10. The function returns 50, which is the result of multiplying 5 and 10. We then log the result to the console.

Function expressions are useful because they allow us to define functions dynamically at runtime, assign them to variables, and pass them as arguments to other functions. They can also be used to create anonymous functions, which are useful for event listeners and callbacks.

## Arrow Function

An arrow function (also known as a "fat arrow function") is a shorthand syntax for writing anonymous functions in JavaScript. Arrow functions were introduced in ECMAScript 6 (ES6) and are widely used in modern JavaScript.

`code`

```js
let greet = () => {
  console.log("hello world");
};

greet();
```

Here's an example of an arrow function with arguments:
`code`

```js
let square = (num) => {
  return num * num;
};
console.log(square(5));
```

In this example, the arrow function square takes a single argument num and returns its square.

If the arrow function has only a single expression, you can omit the curly braces and return keyword. The result of the expression will automatically be returned.

Here's an example:
`code`

```js
let square = (num) => num * num;
console.log(square(5));
```

### Default parameters

Arrow functions in JavaScript can have default parameters, which are used when the function is called without a value being passed for that parameter. Default parameters are specified by assigning a value to the parameter in the function definition.

For example:
`code`

```js
const greeting = (name = 'stranger) => {
  retutn `Hello, ${name}`;
};

console.log(greeting()); //'Hello, stranger
console.log(greeting('John')); //'Hello, John
```

`default parameters`

```js
//default parameters
const details = (fname = "John", lname = "Doe", age = 30) => {
  console.log(`${fname} ${lname} is ${age} years old`);
};

details(); //if arguments is passed, it will override the default value
```

Advantages of using arrow functions in JavaScript include:

1. Shorter syntax:
   Arrow functions have a more concise syntax compared to traditional function expressions, making the code more readable and easier to write.
2. Implicit this:
   Arrow functions do not have their own this value, which means that they inherit the this value from their surrounding context, making it easier to work with this inside callbacks.
3. Lexical arguments:
   The arguments object is not available inside arrow functions, making it easier to manage function arguments.
4. No new keyword:
   Arrow functions cannot be used with the new keyword to create objects, making it harder to accidentally create objects in the wrong way.
5. Easy to use in functional programming:
   Arrow functions can be used in functional programming paradigms, making it easier to write functional code and to work with higher-order functions.

---

## Higher order Functions(HOF)

A function which takes another function as an argument or returns a function from it is known as HOF.

`Example`

```js
function test() {
  return 1 + 2;
}

function hello(x) {
  let data = function () {
    console.log("HOF");
    console.log("Result of test:", x());
  };
  return data;
}

const hofFunction = hello(test);
hofFunction();

//Here, "hello" is the HOF since it takes another function "test" as an argument and returns another function "data".
```

`without HOF: code`

```js
const radius = [3, 1, 2, 4];

const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

console.log(calculateArea(radius));

const calculateCircumference = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i] * radius[i]);
  }
  return output;
};

console.log(calculateCircumference(radius));

const calculateDiameter = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i] * radius[i]);
  }
  return output;
};

console.log(calculateDiameter(radius));
```

Here, in this example, we are only changing the logic, but all the function has the similar code. This can be solved by using HOF writing minimal code.

`With HOF?`

```JS
const radius = [3, 1, 2, 4];
const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));
```

In this code, the functions area, circumference, and diameter are defined. These are not higher-order functions themselves, but they will be used as arguments for the higher-order function "calculate".

- The calculate function takes two parameters: an array of radius and a function called logic.
- Inside the function, an empty array called output is initialized. This array will store the results of applying the logic function to each radius.
- A loop iterates through each radius in the radius array. For each radius, the logic function (which can be area, circumference, or diameter) is called with the current radius as an argument, and the result is pushed into the output array.
- Finally, the output array containing the results of applying the logic function to each radius is returned.
- The code then demonstrates how to use the calculate function with different functions (area, circumference, and diameter) as the logic argument.

---

### Built-in Higher order functions

#### forEach()

`forEach` method takes in three parameters of element, index and array.

- element: it specifies each item in the array.

- index: it specifies the zero-based index of the items in the array.

- array: it specifies the entire array.

`Example:1`

```js
const moviesName = [
  "The Hobbit",
  "John Wick",
  "Black Adam",
  "The Woman King",
  "Black Panther",
  "Glass Onion",
  "Avatar: The Way of Water",
  "Memory",
];

const print = moviesName.forEach(function (movie, index, arr) {
  console.log(
    `The name of this movie is ${movie}, and is at the index of: ${index} and the array is: ${arr}`
  );
});

console.log(print);
```

`Example:2`

```js
// List of popular movies
const moviesName = ["The Hobbit", "John Wick", "Black Adam"];

// A function: log out the names of the movies to the console.
function printMovies(movie) {
  console.log(movie);
}

// // anonymous function or arrow function can make your code easier to read.
// A forEach method with a function as an argument
moviesName.forEach(printMovies);

// // anonymous function
// moviesName.forEach(function (movie) {
//   console.log(movie);
// });

// // arrow function
// moviesName.forEach((movie) => console.log(movie));

//Console output.
/*
The Hobbit
John Wick
Black Adam
*/
```

Here, the movieNames variable is assigned names of popular movie titles, and then a function of printMovies is invoked to log out the names of the movies in the console. The forEach() method takes the function name as an argument as iterates through the array and then prints the title of each movie into the console.

---

#### map()

- Sometimes you may need to take an array and apply some procedure to its elements so that you get a new array with modified elements.
- the map() takes in a callback function as an argument that executes once and does not change the original array but instead, it returns as a new value.

`map()`

```js
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map((num) => num * num);
console.log(squareNumbers); // [1,4,9,16,25]
```

In this example, the map function is called on the numbers array and a callback function num => num × num is passed as an argument. The map function returns a new array squaredNumbers with the results of squaring each element in the numbers array.

`Example: 1`

```js
const employees = [
  { name: "John", salary: 50000 },
  { name: "Jane", salary: 55000 },
  { name: "Jim", salary: 60000 },
];
const updatedEmployees = employees.map((employee) => {
  return {
    name: employee.name,
    salary: employee.salary + 5000,
    currency: "USD",
  };
});
console.log, updatedEmployees;

/*  [  { name: 'John', salary: 55000, currency: 'USD'},
          { name: 'Jane', salary: 60000, currency: 'USD' },
          { name: 'Jim', salary: 65000, currency: 'USD' }
        ] ;
    */

//In this example you get the new updated salary of all employees.
```

`Example:2`

```js
// List of Hollyword moves, names, director, release date, series.
const movies = [
  {
    name: "The Hobbit",
    director: "Peter Jackson",
    firstRelease: 2012,
    lastRelease: 2014,
    series: 3,
  },
  {
    name: "John Wick",
    director: "Chad Stahelski",
    firstRelease: 2014,
    lastRelease: 2023,
    series: 4,
  },
  {
    name: "Black Adam",
    director: "Jaume Collet-Serra",
    firstRelease: 2022,
    lastRelease: 2022,
    series: 1,
  },
];

// return all the series of the movies into a new array
const print = movies.map(function (movie) {
  return movie.series;
});
console.log(print); // [3, 4, 1]
```

---

#### filter()

- The filter() higher-order function is used to filter through an entire array and return a new array that meets the specified condition.
- The filter() takes in a callback function as an argument.
- It does not mutate the original array, instead, it returns a new one.

`filter()`

```js
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

console.log(result); // [32,33,40]
```

`Example:1`

```js
const products = [
  { name: "Apple", type: "fruit", price: 1.99 },

  { name: "Carrot", type: "vegetable", price: 0.99 },

  { name: "Banana", type: "fruit", price: 0.79 },
  { name: "Tomato", type: "vegetable", price: 1.49 },
];
const filteredProducts = products.filter((product) => {
  return product.type === "fruit" && product.price < 1.0;
});
console.log(filteredProducts);
/*
    { name: 'Banana', type: 'fruit', price: 0.79 }
    */
```

In this example, the filter function is used to create a new array of products that are fruits and have a price less than 1.00. The original products array is not modified. The filter function takes a callback function as an argument, which returns true for elements that should be included in the filtered array and false for elements that should be excluded. In this example, the callback function checks if the product type is 'fruit' and the price is less than 1.00.

`Example:2`

```js
const movies = [
  {
    name: "The Hobbit",
    director: "Peter Jackson",
    firstRelease: 2012,
    lastRelease: 2014,
    series: 3,
  },
  {
    name: "John Wick",
    director: "Chad Stahelski",
    firstRelease: 2014,
    lastRelease: 2023,
    series: 4,
  },
  {
    name: "Black Adam",
    director: "Jaume Collet-Serra",
    firstRelease: 2022,
    lastRelease: 2022,
    series: 1,
  },
];
// Return the movie with Chad Stahelski as director
const print = movies.filter(function (movie) {
  return movie.director === "Chad Stahelski";
});

console.log(print);
```

---

#### reduce()

- The reduce() method is used to return a single value.
- The reduce() method takes a callback function, this callback function takes in two parameters which are:

  - accumulator: This is the value that is accumulated and returned as the total.
  - current value: This is the current value in the array.

`reduce()`

```js
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});
console.log(sum); // 15
```

`Example:1`

```js
const purchases = [
  { item: "Apple", price: 1.99, quantity: 5 },
  { item: "Carrot", price: 0.99, quantity: 3 },
  { item: "Banana", price: 0.79, quantity: 10 },
  { item: "Tomato", price: 1.49, quantity: 2 },
];

const totalCost = purchases.reduce((acc, purchase) => {
  return acc + purchase.price * purchase.quantity;
}, 0);
console.log(totalCost); // 29.64
```

In this example, the reduce function is used to calculate the total cost of all purchases by multiplying the price and quantity of each purchase and adding the result to an accumulator. The second argument to reduce, 0, is the initial value of the accumulator. The reduce function takes a callback function as an argument, which takes the accumulator and the current purchase as arguments, calculates the cost of the current purchase, and returns the updated accumulator value. The reduce function returns the final accumulator value, which is the total cost of all purchases in this example.

`Example:2`

```js
//List of Movies
const movies = [
  {
    name: "The Hobbit",
    director: "Peter Jackson",
    firstRelease: 2012,
    lastRelease: 2014,
    series: 3,
  },
  {
    name: "John Wick",
    director: "Chad Stahelski",
    firstRelease: 2014,
    lastRelease: 2023,
    series: 4,
  },
  {
    name: "Black Adam",
    director: "Jaume Collet-Serra",
    firstRelease: 2022,
    lastRelease: 2022,
    series: 1,
  },
];
// return the total movies in the series
const print = movies.reduce(function (accumulator, movie) {
  return accumulator + movie.series;
}, 0);

console.log(print); // 8
```

---

#### find()

Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.

Imagine you have an array of objects representing customers, and each object has a customerId property. You want to find the customer with a specific customerId.

`find()`

```js
//find
let customers = [
  { customerId: 123, name: "John Doe" },
  { customerId: 456, name: "Jane Doe" },
  { customerId: 789, name: "Jim Smith" },
];
let targetId = 456;
let targetCustomer = customers.find(function (customer) {
  return customer.customerId === targetId;
});
console.log(targetCustomer);
// {customerId: 456, name:"Jane Doe"}
```

In this example, the find() method is used to find the customer object with the customerId of 456. The find() method takes a callback function that returns true if the current customer object's customerId is equal to 456, and false otherwise. The find() method will stop and return the first customer object for which the callback returns true.

---

#### findIndex()

Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, -1 is returned. The callback function is invoked with three arguments: the value of the current element, the index of the current element, and the array being traversed.

Imagine you have an array of objects representing customers, and each object has a customerId property. You want to find the index of the customer with a specific customerId.

`findIndex()`

```js
//findIndex()
let customers = [
  { customerId: 123, name: "John Doe" },
  { customerId: 456, name: "Jane Doe" },
  { customerId: 789, name: "Jim Smith" },
];
let targetId = 456;
let targetCustomer = customers.findIndex(function (customer) {
  return customer.customerId === targetId;
});
console.log(targetCustomer); //1
```

In this example, the findIndex() method is used to find the index of the customer object with the customerId of 456. The findIndex() method takes a callback function that returns true if the current customer object's customerId is equal to 456, and false otherwise. The findIndex() method will stop and return the index of the first customer object for which the callback returns true.

---

#### some()

Tests whether at least one element in the array passes the test implemented by the provided function. The callback function is invoked with three arguments: the value of the current element, the index of the current element, and the array being traversed.

Imagine you have an array of objects representing customers, and each object has a customerId property. You want to know if there are any customers with a specific customerId.

`some()`

```js
//some()
let customers = [
  { customerId: 123, name: "John Doe" },
  { customerId: 456, name: "Jane Doe" },
  { customerId: 789, name: "Jim Smith" },
];
let targetId = 456;
let targetCustomer = customers.some(function (customer) {
  return customer.customerId === targetId;
});
console.log(targetCustomer); //true
```

In this example, the some() method is used to check if there are any customers with the customerId of 456. The some() method takes a callback function that returns true if the current customer object's customerId is equal to 456, and false otherwise. The some() method will stop and return true as soon as it finds the first customer object for which the callback returns true.

---

#### every()

Tests whether all elements in the array pass the test implemented by the provided function. The callback function is invoked with three arguments: the value of the current element, the index of the current element, and the array being traversed.

Imagine you have an array of objects representing customers, and each object has a customerId property. You want to know if all customers have a customerId that is greater than 100.

`every()`

```js
//every()
let customers = [
  { customerId: 123, name: "John Doe" },
  { customerId: 456, name: "Jane Doe" },
  { customerId: 789, name: "Jim Smith" },
];
let targetId = 456;
let targetCustomer = customers.every(function (customer) {
  return customer.customerId > 100;
});
console.log(targetCustomer); //true
```

In this example, the every() method is used to check if all customers have a customerId that is greater than 100. The every() method takes a callback function that returns true if the current customer object's customerId is greater than 100, and false otherwise. The every() method will stop and return false as soon as it finds the first customer object for which the callback returns false.

---

## JavaScript functions as first-class citizens

- Assigning a function to a variable
- Passing a function as an argument to another function
- Returning a function from another function
- Storing functions in data structures

`Example`

```js
// 1. Assigning a function to a variable
const greet = function (name) {
  return `Hello, ${name}!`;
};

// 2. Passing a function as an argument to another function
function executeGreeting(greeterFunction, name) {
  return greeterFunction(name);
}

const result = executeGreeting(greet, "John");
console.log(result); // Output: Hello, John!

// 3. Returning a function from another function
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

// 4. Storing functions in data structures
const mathOperations = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};

console.log(mathOperations.add(10, 5)); // Output: 15
console.log(mathOperations.subtract(10, 5)); // Output: 5
```

---

## use strict

- The "use strict" directive was new in ECMAScript version 5.
- The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
- It helps you to write cleaner code, like preventing you from using undeclared variables.
- Strict mode is declared by adding "use strict"; to the beginning of a script or a function.
- Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode):

`use strict inside function`

```js
function subtract() {
  //"use strict" inside function, doesn't affect outside the function
  "use strict";
  let a = 10;
  let b = 20;
  subtract = b - a;
  return subtract;
}

result = subtract();
console.log(result); // 10

a = 40;
console.log(a); // 40
```

`use strict to the begining of the code`

```js
"use strict"; // acts as global scope
function subtract() {
  a = 10; //ReferenceError, a is not defined
  b = 20;
  subtract = b - a;
  return subtract;
}

result = subtract();
console.log(result);
```

---

## this keyword

![Alt text](images/this_keyword.jpg)

This keyword refers to the object it belongs to. It has different values depending on where it is used.

- Alone “this” refers to the global object. If we call this directly, it refers to the window object.

![Alt text](images/this_window.png)

- In a regular or traditional function, “this” refers to the global object.

```js
function add(a, b) {
  sum = a + b;
  console.log(sum);
  console.log(this);
  add(1, 2);
}
```

output in browser:

![Alt text](images/this_regular_output.png)

- In a method “this” refers to the owner object.

```js
//person is an object
// refer to object chapter for more detals
const person = {
  name: "Gyamzo",
  address: "Kathmandu",
  details: function () {
    // this refers to the object "person" => person.name
    console.log(this.name);
  },
};
person.details();
```

- In a function in strict mode, this refers to undefined.

```js
"use strict";
function add(a, b) {
  const result = a + b;
  console.log(result);
  console.log(this); // undefined
}
add(10, 20);
```

- In the case of call, apply and bind, this refers to the object that is passed as an argument to the respective method.

`refer to object chapter for more details on call-apply-bind.`

1. The call method allows you to call a function with a specific this value and arguments passed individually.

2. The apply method is similar to the call method, but it takes the arguments as an array.

3. The bind method returns a new function where this refers to the object passed as an argument to bind. The returned function can be called later with a different this value and arguments.

![Alt text](images/this_call-apply-bind.jpg)

`In this example, the fullName function is a method of the person object. By using call, apply, and bind, we are able to change the "this" value inside the fullName function to person2 and get the full name of that object.`

---
