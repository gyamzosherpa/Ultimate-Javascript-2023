# Object

- [Object](#object)
  - [Object Definition](#object-definition)
  - [Several ways to create an object](#several-ways-to-create-an-object)
  - [Object Methods or Action](#object-methods-or-action)

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
