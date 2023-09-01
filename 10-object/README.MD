# Object

- [Object](#object)
  - [Object Definition](#object-definition)
  - [Several ways to create an object](#several-ways-to-create-an-object)
  - [Object Methods or Action](#object-methods-or-action)
  - [Destructuring](#destructuring)
    - [Destructuring in Object](#destructuring-in-object)
    - [Destructuring in Array](#destructuring-in-array)
    - [Destructuring in Function](#destructuring-in-function)
  - [Property getters and setters](#property-getters-and-setters)
  - [Constructor Function Vs Object Literal](#constructor-function-vs-object-literal)
  - [Object Prototype](#object-prototype)
  - [CALL APPLY BIND](#call-apply-bind)
    - [Call()](#call)
    - [Apply()](#apply)
    - [Bind()](#bind)
  - [DIFFERENCE BETWEEN CALL, APPLY, BIND](#difference-between-call-apply-bind)
  - [Pass By Value vs Pass By Reference](#pass-by-value-vs-pass-by-reference)
    - [Pass By Value](#pass-by-value)
    - [Pass By Reference](#pass-by-reference)
    - [Shallow copying](#shallow-copying)
      - [Object.assign()](#objectassign)
      - [spread operator](#spread-operator)
    - [Deep Copying](#deep-copying)
      - [JSON.stringify() and JSON.parse()](#jsonstringify-and-jsonparse)
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

## Pass By Value vs Pass By Reference

When we work with the `primitive data type`, then it is a `“pass by value”`, but if we are working with a `non-primitive data type` like an object, arrays, etc., it is referred to as a `“pass by reference”`.

### Pass By Value

```js
// Pass by value
let a = 10;
let b = a;
a = 20;
console.log(a, b); // a = 20, b = 10
```

The output of the code snippet is 20, 10, indicating that the value of b remains unchanged after assigning it the initial value of a. This demonstrates that JavaScript passes primitive data types (like numbers) by value.

`Another example using function`

```js
let x = 10;

function passByValue(value) {
  value = 20;
}
passByValue(x);
console.log(x); // 10
```

In this example, x is passed as an argument to the passByValue function. A new value value is created and assigned the value of x. When the value of value is changed within the function to 20, it does not affect the value of x outside of the function.

---

### Pass By Reference

```js
// Pass by reference
const person_one = {
  name: "Gyamzo",
  address: "Kathmandu",
};
const person_two = person_one;

// update property
person_two.name = "Jonas";
console.log(person_one, person_two);

// if we update the property of one object, the property of another object will be updated as well

// output: {name:"Jonas", address:"Kathmandu"},{name:"Jonas", address:"Kathmandu"}
```

`Another example: Pass By Reference`

```js
// another example: Pass by reference
let y = { value: 10 };

function passByReference(obj) {
  obj.value = 20;
}
passByReference(y);
console.log(y.value); // 20
```

---

### Shallow copying

- Shallow copying refers to the process of creating a new object that is a copy of an existing object, with its properties referencing the same values or objects as the original.
- In JavaScript, this is often achieved using methods like `Object.assign()` or the `spread syntax ({...originalObject})`.
- Shallow copying only creates a new reference to the existing objects or values and doesn’t create a deep copy, which means that nested objects are still referenced, not duplicated.

`Without shallow copying`

```js
let obj1 = {
  name: "Gyamzo",
  address: "Kathmandu",
};

obj2 = obj1; // referencing to the same object

obj2.name = "John";
console.log(obj1, obj2);

// both obj1 and obj2 will have the same output
```

#### Object.assign()

`shallow copying:Object.assign()`

```js
// Object.assign
let obj1 = {
  name: "Gyamzo",
  address: "Kathmandu",
};

obj2 = Object.assign({}, obj1);

//only obj2 will be updated, obj1 will not be updated
obj2.name = "John";
console.log(obj1, obj2);

// {name: 'Gyamzo', address: 'Kathmandu'} {name: 'John', address: 'Kathmandu'}
```

#### spread operator

`shallow copying:spread operator`

```js
// spread operator
let obj1 = {
  name: "Gyamzo",
  address: "Kathmandu",
};

obj2 = { ...obj1 };

//only obj2 property updates, obj1 have the same properties
obj2.name = "John";
console.log(obj1, obj2);

// obj1: {name: 'Gyamzo', address: 'Kathmandu'}
// obj2: {name: 'John', address: 'Kathmandu'}
```

---

### Deep Copying

Deep copying is a technique that creates a new object, which is an exact copy of an existing object. This includes copying all its properties and any nested objects, instead of references. Deep cloning is helpful when you need two separate objects that don’t share references, ensuring changes to one object don’t affect the other.

#### JSON.stringify() and JSON.parse()

- JSON.parse is a method in JavaScript that parses a JSON string and converts it into a JavaScript object. . It takes a JSON string as an input and returns a JavaScript object constructed from that JSON string.
- JSON.stringify is a method in JavaScript that converts a JavaScript object into a JSON string. The method takes an object as an input and returns a JSON string representation of that object.

`without deep copying`

```js
let obj3 = {
  name: "HAKU",
  address: "London",
  hobbies: {
    sports: "cricket",
    music: "coding",
  },
};

obj4 = { ...obj3 };
obj4.hobbies.sports = "football";
console.log(obj3, obj4);
```

In the example above, we are using a spread operator. “obj3” is the main object, and "name" and "address" are `high-level or first-level properties`, so if we change the properties of any one object => properties of that object will be updated, but if we try to change properties of "hobbies" then it changes the properties of both “objj3” and “obj4” even after using spread operator as shown in the example. => "hobbies" are `second-level objects or lower-level properties`, the same thing applies in arrays too. So, for deep copying we have to apply "JSON.stringify and JSON.parse".

Example:

`deep copying of object:JSON.stringify() and JSON.parse()`

```js
//JSON.stringify and JSON.parse
let obj3 = {
  name: "HAKU",
  address: "London",
  hobbies: {
    sports: "cricket",
    music: "coding",
  },
};
/*-- JSON.stringify converts object to string first and then converts it back to object using JSON.parse. ---*/
obj4 = JSON.parse(JSON.stringify(obj3));
obj4.hobbies.sports = "football";
console.log(obj3, obj4);

//output
/*
obj3: {name: 'HAKU', address: 'London', hobbies:{
  music:"coding"
sports:"cricket"
}}

obj4: {name: 'HAKU', address: 'London', hobbies:{
  music:"coding"
sports:"football"
}}

*/
```

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
