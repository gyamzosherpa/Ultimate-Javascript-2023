# Data Types

- [Data Types](#data-types)
  - [Primitive and Non-Primitive Data Types](#primitive-and-non-primitive-data-types)
  - [Primitive Data Types](#primitive-data-types)
    - [String](#string)
      - [Some String built-in methods](#some-string-built-in-methods)
    - [Number](#number)
      - [Some Number built-in methods](#some-number-built-in-methods)
      - [Math Built-In Methods](#math-built-in-methods)
      - [some important math built in methods:](#some-important-math-built-in-methods)
      - [Random Number Generator](#random-number-generator)
    - [null and undefined](#null-and-undefined)
    - [Boolean](#boolean)
  - [Type Conversion](#type-conversion)
    - [Implicit(type-coercion)](#implicittype-coercion)
    - [Explicit(Type-Casting)](#explicittype-casting)

## Primitive and Non-Primitive Data Types

"Primitive data" are the type that contains a single value.

"non-primitive" contains a collection of values.

Primitive Data Types:

1. Number: represents numeric values, e.g. 42, 3.14.
2. String: represents a sequence of characters, e.g. 'hello', "world".
3. Boolean: represents true or false values.
4. Null: represents intentional non-existence of any object value.
5. Undefined: represents an uninitialized value or a non-existent object property.

Additionally, there are three special data types in JavaScript:

1. Function: a function is a block of code that can be executed when called. Functions are objects in JavaScript and can be assigned to variables or properties of objects.
2. Array: an ordered list of values, represented as [value1, value2, value3, ...]. Arrays are a type of object in JavaScript.
3. Object: represents a collection of key-value pairs and is used to store more complex data structures.

Example:

```js
// primitive data types
let x = 90; // number
const fullName = "Gyamzo Sherpa"; // string
let isSingle = true; // boolean: true or false

let y;
console.log(y); // undefined

const z = null;
console.log(z); // null
console.log(typeof z); // object

// non-primitive data types

//function
function text() {
  const address = "london";
  console.log(address);
}
text();

//array
let players = ["messi", "ronaldo", "mbappe’", "neymar"];

//object
let person = {
  name: "Gyamzo",
  address: "KTM",
};
```

## Primitive Data Types

### String

```js
    //string-manipulation
    //string can be used in different ways: " ", ' ', ` `


    let fname = 'gyamzo';
    let lname = 'sherpa’;
    let address = 'Swyambhu';

    // combine string
    console.log('my name is', fname + ' ' + lname + 'im from' + ' ' + address); // ' ': add space

    //combine using template literal: ``, ${}
    console. log("my name is ${fname} ${lname}. I m from ${address}");

    //let myName = 'gyamzo \n sherpa’; // \n means new Line, we can use multiple new Line
    let myName = 'gyamzo \t \t sherpa’; // \t means tab, we can use multiple tab
    console. log(myName); // gyamzo sherpa
```

#### Some String built-in methods

1. length and charAt
2. indexOf and lastIndexOf
3. slice, substring, substr
4. replace, toUpperCase, toLowerCase
5. trim, includes, concat, etc

for more details: https://www.w3schools.com/jsref/jsref_obj_string.asp

### Number

```js
// Integer
let myInt = 10;

// Floating-point number
let myFloat = 3.14;

// NaN (Not a Number)
let myNaN = NaN;

// Infinity
let myInfinity = Infinity;
```

NaN: Stands for "Not a Number". It is a value that represents the result of an operation that cannot be represented as a numerical value.

For example, dividing zero by zero or taking the square root of a negative number results in NaN. The NaN value is considered to be a numeric data type, but it is not equal to any other value, including itself.
You can check if a value is NaN using the isNaN() function.

```js
// Nan
let result = 0 / 0;
console.log(result); // Output: NaN
console.log(result === NaN); // Output: false
console.log(isNaN(result)); // Output: true
```

Infinity: Represents a value that is greater than any other numerical value. It is a result of a mathematical operation that results in a number too large to be represented in JavaScript. The Infinity value is considered to be a numeric data type and is equal to itself. It can be positive or negative, depending on the sign of the original operation that produced it.

```js
// Infinity
let result = 1 / 0;
console.log(result); // Output: Infinity
console.log(result === Infinity); // Output: true
console.log(result === -Infinity); // Output: false
```

#### Some Number built-in methods

1. toPrecision()
2. valueOf()
3. toFixed()
4. parseInt()
5. parseFloat()

```js
// toPrecision()
let num1 = 3.141592653589793;
console.log(numl.toPrecision(4)); // Output: 3.142
console.log(num1.toPrecision(8)); // Output: 3.1415927

// toValue0f()
let num2 = 42;
console.log(num2.value0f()); // Output: 42

// toFixed()
let num3 = 3.141592653589793;
console.log(num3.toFixed(2)); // Output: 3.14
console.log(num3.toFixed(8)); // Output: 3.14159265

// parseInt()
let str = "42px";
let num = parseInt(str);
console.log(num); // Output: 42

// parseFloat()
let str2 = "3.14someothercharacters";
let num2 = parseFloat(st2r);
console.log(num2); // Output:
```

#### Math Built-In Methods

Math is a built-in object that has properties and methods for mathematical constants and functions. It's not a function object. The JavaScript Math object allows you to perform mathematical tasks on numbers.

```js
//trunc()
//positive number
let num = 12.9;
let truncatedNum = Math.trunc(num);
console.log(truncatedNum);

//negative number
var num2 = -12.9;
var truncatedNum2 = Math.trunc(num2);
console.log(truncatedNum2); // Output: -12
```

#### some important math built in methods:

1. math.floor()
2. math.round()
3. math.ceil()
4. math.abs()
5. math.pow()

for more details visit: [math](https://www.w3schools.com/js/js_math.asp)

#### Random Number Generator

Math.random() returns a random floating-point number ranging from 0 to less than 1 (inclusive of 0 and exclusive of 1).

```js
//random number
let randomNum = Math.random(); // 0 - 1
console log(randomNuml);

let r2 = Math random() * 10; // 0 - 9
console log(r2);

let r3 = Math.floor(Math.random() * 10) + 1; // 1-10
console log(r3); //first value is max, second is min (25,15)

let r4 = Math.floor(Math.random() * (25 - 10)) + 15; // 15-24
console.log(r4);

//using function
function randomNum(max, min) {
let r4 = Math.floor(Math.random() * (max - min)) + 15;
console.log(r4);
}

randomNum(26, 15); // 115-25
```

### null and undefined

In JavaScript, undefined is a type, whereas null an object. Both represent no value.

```js
// undefined
//It means a variable declared, but no value has been assigned a value.
//For example,
var demo;
alert(demo); //shows undefined
alert(typeof demo); //shows undefined

// null
//Whereas, null in JavaScript is an assignment value. You can assign it to a variable.
//For example,
var demo = null;
alert(demo); //shows null
alert(typeof demo); //shows object

//Another example
let number = 20 + null;
console.log(number); //shows 20
let number2 = 20 + undefined;
console.log(number2); //shows Nan
```

### Boolean

The boolean data type represents a value that can be either true or false. This data type is often used in conditional statements and loops to determine whether certain conditions are met.

```js
let isNepali = true;
console.log(isNepali); //true
console.log(typeof isNepali); //boolean
```

## Type Conversion

> `truthy / Falsy`
> In JavaScript, a truthy or falsy value is a value that is being casted into a boolean when evaluated in a boolean context. An example of boolean context would be the evaluation of an if condition:
> Every value will be casted to true unless they are equal to:

`false`
`0`
`"" (empty string)`
`null`
`undefined`
`NaN`

### Implicit(type-coercion)

JavaScript automatically converts one data type to another (to the right type). This is known as implicit conversion.

```js
// numeric string used with + gives string type
let result;

result = "3" + 2;
console.log(result); // "32"

result = "3" + true;
console.log(result); // "3true"

result = "3" + undefined;
console.log(result); // "3undefined"

result = "3" + null;
console.log(result); // "3null"
```

```js
// Implicit Conversion
const implicitConversion = "20" / "5"; //both automatically convert to number
console.log(implicitConversion); // 4

console.log("23" + 23); //2323, because in string we can use "+"
console.log("hello" + 23); //hello23, 23 automatically change to string
console.log("hello" - 34); //NaN, in string we cannot use "-,/,*"
console.log(24 - "Hello"); //NaN
console.log(2000 / "hello"); //NaN
console.log(2000 * "hello"); //NaN
console.log(true + true); //true = 1
```

### Explicit(Type-Casting)

In JavaScript, explicit type conversions are done using built-in methods.

Number() AND Boolean()

```js
// Explicit Conversion

// falsy values: 0, "", undefined, null, NaN, false

console.log(Number("123456")); // 123456
console.log(Number("Hello")); // Nan, string cannot be number
console.log(Number(true)); // 1, true = 1
console.log(Number(false)); // 0, false = 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

console.log(Boolean("hello")); //true, if there is content inside "", it is set to true
console.log(Boolean("")); //false, empty string
console.log(Boolean(" ")); //true, there is some space: " "
console.log(Boolean(0)); // false, 0=false
console.log(Boolean(1)); // true, 1=true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

console.log(!"true"); //false, "true" is string, anything inside "" is true, therefore !true = false
console.log(!"gYAMZO"); //false
console.log(!"123"); //false
console.log(!123); //false
```

To convert other data types to strings, you can use either String() or toString()

```js
//number to string
const num = 20;
const changeNum = String(num);
console.log(typeof changeNum); //string

const isNepali = true;
const check = String(isNepali);
console.log(check);
console.log(typeof check); //string

let result;
result = String(324);
console.log(result); // "324"

result = String(2 + 4);
console.log(result); // "6"

//other data types to string
result = String(null);
console.log(result); // "null"

result = String(undefined);
console.log(result); // "undefined"

result = String(NaN);
console.log(result); // "NaN"

result = String(true);
console.log(result); // "true"

result = String(false);
console.log(result); // "false"

// using toString()
result = (324).toString();
console.log(result); // "324"

result = true.toString();
console.log(result); // "true"
```
