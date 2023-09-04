# Object

- [Object](#object)
  - [Object Definition](#object-definition)
  - [Several ways to create an object](#several-ways-to-create-an-object)
  - [Object Methods or Action](#object-methods-or-action)
  - [Property getters and setters](#property-getters-and-setters)
  - [Constructor Function Vs Object Literal](#constructor-function-vs-object-literal)
  - [Object Prototype](#object-prototype)
  - [CALL APPLY BIND](#call-apply-bind)
    - [Call()](#call)
    - [Apply()](#apply)
    - [Bind()](#bind)
  - [DIFFERENCE BETWEEN CALL, APPLY, BIND](#difference-between-call-apply-bind)
  - [Everything is an Object in JavaScript](#everything-is-an-object-in-javascript)

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

// object destructuring?? (refer to destructuring chapter)
const { add, subtract, reset, getValue } = calculator;

add(5);
subtract(3);
console.log(getValue()); // 2

reset(); // Resets the currentValue to 0
console.log(getValue()); // 0
```

> [Destructuring](https://github.com/gyamzosherpa/Ultimate-Javascript-2023/tree/master/12-destructuring)

---

## Property getters and setters

In an object literal they are denoted by get and set:

```js
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

// console.log(user.name); // John

// set fullName is executed with the given value
user.fullName = "Alice Cooper";

console.log(user.name); //Alice
console.log(user.surname); //Cooper

// if we log in the user object, we get new property values
console.log(user); //name:"Alice", surname:"Cooper"
```

---

## Constructor Function Vs Object Literal

- Object Literal is generally used to create a single object. The constructor function can create multiple objects.

`Example`

```js
// object literal
let person = {
  name: "Gyamzo",
};

// constructor function
function person() {
  this.name = "Gyamzo";
}
let person1 = new person();
let person2 = new person();
let person3 = new person();

// adding new property to person1
// Each object created from the constructor function is unique
person1.age = 20;
console.log(person1); // name:"Gyamzo", age:20
console.log(person2); // name:"Gyamzo"
console.log(person3); // name:"Gyamzo"
```

## Object Prototype

Prototype helps to add the property to all the new objects form from parent object.

```js
function person() {
  (this.name = "Gyamzo"), (this.age = 27);
}
let person1 = new person();
let person2 = new person();

// adding new property using prototype
person.prototype.gender = "Male";

console.log(person1.gender); //Male
console.log(person2.gender); //Male
```

---

## CALL APPLY BIND

Call is a function that helps you change the context of the invoking function. In layperson's terms, it helps you replace the value of this inside a function with whatever value you want.

Apply is very similar to the call function. The only difference is that in apply you can pass an array as an argument list.

Bind is a function that helps you create another function that you can execute later with the new context of this that is provided.

### Call()

call is a function that you use to change the value of "this" inside a function and execute it with the arguments provided.

`call()`

```js
let student = {
  firstName: "Gyamzo",
  lastName: "sherpa",
  age: 27,
  getEmail: function () {
    return `${this.firstName}.${this.lastName}@test.com`;
  },
};
let teacher = {
  firstName: "entu",
  lastName: "mintu",
  age: 27,
};
console.log(student.getEmail.call(teacher)); //entu.mintu@test.com
```

In the example above, we have two objects student and teacher, where student object has getEmail function and teacher has no function. If we have to print firstName and lastName of teacher object then we can use call method by combining with student object.

If we do not have getEmail function in both object then we can access to the key properties by combining both objects with getEmail function.

`example: parameter`

```js
let person = {
  firstName: "Gyamzo",
  lastName: "Sherpa",
};
let displayName = function (greeting, message) {
  return greeting + " " + this.firstName + " " + this.lastName;
};
console.log(displayName.call(person, "Hello", "Morning")); //Hello, Morning Gyamzo Sherpa
```

In this example, the call method is used to invoke the displayName function and set its this value to person object. Here, we passed "Hello" as the `greeting`, "Morning" as `message` and `person` as the 'this' value. The result is the expected greeting along with firstName and lastName from the person object: `Hello, Morning Gyamzo Sherpa`

---

### Apply()

The Apply function is very similar to the Call function. The only difference between call and apply is the difference in how arguments are passed. call() takes the arguments separated by commas, while apply() takes the arguments as an array.

In apply, you can pass an argument as an array literal or a new array object.

`Apply()`

```js
const person = {
  firstName: "John",
  lastName: "Doe",
};
function greet(greeting, message) {
  return `${greeting} ${this.firstName}. ${message}`;
}
let result = greet.apply(person, ["Hello", "How are you?"]);

console.log(result); // Hello John. How are you?
```

In this example, we set the this value inside the function to the person object. The arguments of the greet() function was passed into the apply() method as an array.

The apply() method invoked the greet() function with the this value set to the person object and arguments as an array ['Hello', 'How are you?'].

If you use the call() method, you need to pass the arguments of the greet() function separately as follows:

`let result = greet.call(person, Hello', 'How are you?');`

`Another Example`

```js
function greet(name, message) {
  console.log(message + ", " + name);
}
// Using call(): this refers to window or document object
greet.call(this, "Alice", "Hello"); // Hello, Alice
greet.call(this, "Bob", "Hi"); // Hi, Bob

// Using apply()
greet.apply(window, ["Alice", "Hello"]); // Hello, Alice
greet.apply(document, ["Bob", "Hi"]); // Hi, Bob
```

---

### Bind()

The bind function creates a copy of a function with a new value to the this presents inside the calling function.
`The bind() method creates a new function` whereas call and apply cannot create a copy of function.

`bind()`

```js
const student1 = {
  name: "Jack",
  grade: "5",
  introduction: function () {
    console.log(this.name + "studies in grade" + this.grade + "."); // Jimmy studies in grade 6.
  },
};

const student2 = {
  name: "Jimmy ",
  grade: " 6",
};

// the object student2 is borrowing introduction method from student1
let result = student1.introduction.bind(student2);

// invoking result() function
result();
```

In the above example, we have defined two objects `student1` and `student2`.

Since student2 doesn't have the `introduction()` method, we are borrowing it from student1 using the bind() function.

`student1.introduction.bind(student2)` returns the copy of `introduction()` and assigns it to result.

---

## DIFFERENCE BETWEEN CALL, APPLY, BIND

`Example`

```JS
let student = {
  firstName: "Gyamzo",
  lastName: "sherpa",
  age: 27,
  getEmail: function (greeting, message) {
    // return `${this.firstName}.${this.lastName}@test.com`;
    console.log(
      `${greeting}, ${message} ${this.firstName}.${this.lastName}@test.com`
    );
  },
};
let teacher = {
  firstName: "entu",
  lastName: "mintu",
  age: 27,
};

// call()
// let result = student.getEmail.call(teacher, "hello", "good morning");
// result(); //typeError result is not a function

// apply()
// let result = student.getEmail.apply(teacher, ["hello", "good morning"]);
// result(); // typeError result is not a function

// bind()
let result = student.getEmail.bind(teacher, "hello", "morning");
result(); //hello, morning entu.mintu@test.com

let result2 = student.getEmail.bind(teacher);
result2("hello", "afternoon"); //hello, afternoon entu.mintu@test.com
```

Note:

- The call() and apply() method does not make a copy of the function it is being called on, whereas The bind() method creates a new function
- call() and apply() serve the exact same purpose. The only difference between how they work is that call() expects all parameters to be passed in individually, whereas apply() expects an array of all of our parameters.

---

## Everything is an Object in JavaScript

In JavaScript, everything is an object because it uses a prototype-based object-oriented programming language, which means that objects inherit properties and methods from their prototypes, and objects can also have their own properties and methods. Primitive data types such as numbers, strings, and Booleans can be represented as objects using Wrapper Objects like Number, String, and Boolean, respectively, and they inherit properties and methods from the prototype of their respective Wrapper Object. Even functions and arrays are objects in JavaScript, and they have their own properties and methods.

```js
const person = {
  name: "Gyamzo",
};
console.log(typeof person); // object

const array1 = [1, 2, 3, 4];
console.log(typeof array1); // object

function details() {
  console.log("hello world");
}
console.log(typeof details); // function
details.intro = "my name is Gyamzo Sherpa"; // ???
console.log(details.intro); // my name is Gyamzo Sherpa
```

Example:

```js
let name = "John";

// string obj created using the string constructor
let nameObj = new String("John");

console.log(typeof name); // string
console.log(typeof nameObj); // object

// checking if `name` is an object
if (typeof name === "object") {
  console.log("name is an object");
} else {
  console.log("name is not an object");
}

// checking if `nameObj` is an object
if (typeof nameObj === "object") {
  console.log("name is an object");
} else {
  console.log("name is not an object");
}

// output:
// name is not an object
// nameObj is  an object
```

`As you can see, name is a primitive data type string, but nameObject is an object created using the String constructor.`
