# Object

- [Object](#object)
  - [Object Definition](#object-definition)
  - [Several ways to create an object](#several-ways-to-create-an-object)
  - [Object Methods or Action](#object-methods-or-action)
  - [Destructuring](#destructuring)
    - [Destructuring in Object](#destructuring-in-object)
    - [Destructuring in Array](#destructuring-in-array)
    - [Destructuring in Function](#destructuring-in-function)

## Object Definition

An object is like a container that holds related data and functions, which are called "properties" and "methods," respectively. Properties are essentially key-value pairs where the key is a string (also known as a "property name") and the value can be of any data type, including other objects. Methods, on the other hand, are functions that are associated with the object and can be used to perform actions related to that object.

`Example`

```js
// Creating an object representing a person
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet: function () {
    console.log(
      "Hello, my name is " + this.firstName + " " + this.lastName + "."
    );
  },
};

// Accessing object properties
console.log(person.firstName); // Output: John
console.log(person.age); // Output: 30

// Calling an object method
person.greet(); // Output: Hello, my name is John Doe.
```

In this example, `person` is an object with properties like firstName, lastName, and age, as well as a method greet that can be used to introduce the person.

## Several ways to create an object

- Object Literal
- Constructor Function
- class
- Object.create
- new Object

`Example`

```js
// object literal
const student = {
  name: "Jonas",
  age: 27,
};
console.log(student); // name:"Jonas", age:27

// constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("John", 30);
console.log(person1); // name: "John", age: 30
console.log(typeof Person); //function
console.log(typeof person1); //object

// class
class new_student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const new_student1 = new Person("John", 30);
console.log(new_student1); // name: "John", age: 30
console.log(typeof new_student); //function
console.log(typeof new_student1); //object

// Object.create
const new_person = {
  name: "John",
  age: 30,
};
const new_person1 = Object.create(new_person);
console.log(new_person1); // {}

// new Object
const Mobile = new Object();
Mobile.brand = "Apple";
Mobile.model = "Iphone 15";
Mobile.price = "$1000";
console.log(Mobile);
```

---

## Object Methods or Action

methods are functions that are associated with an object and can be used to perform actions or operations related to that object.

```js
// Creating an object representing a calculator
const calculator = {
  currentValue: 0,

  // This syntax is more common in ES5 (ECMAScript 5) and earlier versions of JavaScript.
  add: function (num) {
    this.currentValue += num;
  },
  subtract: function (num) {
    this.currentValue -= num;
  },

  //This syntax is introduced in ES6 (ECMAScript 2015) and is commonly referred to as the method shorthand.
  reset() {
    this.currentValue = 0;
  },
  getValue() {
    return this.currentValue;
  },
  //The method shorthand was introduced in ES6 as a more concise and cleaner way to define methods within objects. It automatically assumes that you are defining a method, so you don't need the function keyword. This shorthand is generally preferred when writing code in modern JavaScript environments.
};

// // Using object methods
// calculator.add(5); // Adds 5 to the currentValue
// calculator.subtract(3); // Subtracts 3 from the currentValue
// console.log(calculator.getValue()); // Output: 2

// calculator.reset(); // Resets the currentValue to 0
// console.log(calculator.getValue()); // Output: 0

// object destructuring
const { add, subtract, reset, getValue } = calculator;

add(5);
subtract(3);
console.log(getValue()); // 2

reset(); // Resets the currentValue to 0
console.log(getValue()); // 0
```

## Destructuring

The destructuring (ES6 feature) assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

### Destructuring in Object

Object destructuring is a technique in JavaScript that allows you to extract properties from an object and assign them to variables with the same name as the property. This can make your code more concise and readable, especially when working with complex objects.

```js
const person = {
  name: "John",
  age: 37,
  location: "New York",
};

// extract the name and age properties from object (person)
const { name, age } = person;
console.log(name); // John
console.log(age); // 37

// cannot assign different key in objects while destructuring; we have to pass the same object properties name.
const { name1, age1 } = person;
console.log(name1, age1); // undefined undefined

//can change the object’s properties name when passing it to the object.

const { name: n, age: a, location: l } = person;
console.log(n, a, l); //John 37 New York

// adding new property and default value while destructuring:
// friend is the new property of `person` object
const { friend = "Annie" } = person;
console.log(friend); //Annie

// example
// let person = {
//   name: "Sarah",
//   country: "Nigeria",
//   job: "Developer",
// };
// let { name, friend = "Annie", age } = person;
// console.log(name); // "Sarah"
// console.log(friend); // "Annie"
// console.log(age); // undefined
```

`Nested object destructuring`

```js
const student = {
  user_name: "John",
  updated_age: 37,
  location: {
    city: "New York",
    country: "USA",
  },
};

// extract the city property from the nested location object
const {
  user_name,
  updated_age,
  location: { city, street_no = 76 },
} = student;

console.log(user_name); //John
console.log(updated_age); //37
console.log(city); // New York
console.log(street_no); //76
```

### Destructuring in Array

```js
const arr = [1, 2];
const [a, b, c = 4] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 4 // c value is default

// nested array destructuring
const numbers = [1, 2, [3, 4]];

const [a1, b1, [c1, d1]] = numbers;
console.log(a1); //1
console.log(b1); //2
console.log(c1); //3
console.log(d1); //4
```

### Destructuring in Function

Destructuring in a function is a way to extract values from objects or arrays and assign them to variables in a more concise and readable manner.

```js
const person = {
  name: "John",
  age: 30,
  location: "New York",
};

/* Instead of accessing the properties of the object using dot notation, you can use destructuring to assign them to variables in a single line
 */

function printPerson({ name, age, location }) {
  console.log(`${name} is ${age} years old and lives in ${location}.`);
}

printPerson(person);
```

---

`Similarly, you can use array destructuring to extract values from arrays and assign them to variables:`

```js
const numbers = [1, 2, 3];

function sum([a, b, c]) {
  console.log(a + b + c); // 6
}

sum(numbers);
```

---

`You can also use object destructuring with default values in function parameters, to make the function more flexible and avoid errors when some arguments are missing.`

```js
function drawES6Chart({
  size = "big",
  cords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, cords, radius);
  // do some chart drawing
}

drawES6Chart({
  cords: { x: 18, y: 30 },
  radius: 30,
});
```

In this example, the function drawES6Chart takes an object as an argument and destructures it into three variables: size, cords and radius. Each variable has a default value in case the object does not have the corresponding property. The function also has a default value of {} for the whole parameter, in case no object is passed at all.

---
