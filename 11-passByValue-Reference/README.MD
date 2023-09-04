# Pass By Value AND Pass By Reference

- [Pass By Value AND Pass By Reference](#pass-by-value-and-pass-by-reference)
  - [Pass By Value vs Pass By Reference](#pass-by-value-vs-pass-by-reference)
    - [Pass By Value](#pass-by-value)
    - [Pass By Reference](#pass-by-reference)
    - [Shallow copying](#shallow-copying)
      - [Object.assign()](#objectassign)
      - [spread operator](#spread-operator)
    - [Deep Copying](#deep-copying)
      - [JSON.stringify() and JSON.parse()](#jsonstringify-and-jsonparse)

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
