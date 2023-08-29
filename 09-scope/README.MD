# scope

- [scope](#scope)
  - [Block Scope](#block-scope)
  - [Local/Function Scope](#localfunction-scope)
  - [Global Scope](#global-scope)

## Block Scope

Variables declared inside a block statement (enclosed in curly braces) are only accessible within that block and its nested blocks. This is known as block scope.

## Local/Function Scope

Variables declared inside a function are only accessible within that function and its nested functions. This is known as local or function scope.

## Global Scope

Variables declared outside of any function or block are accessible throughout the entire program. This is known as global scope.

---

![Alt text](let_var_const_differences.png)

`Example 1`

```js
let pie = 3.14; // global scope

// function scope
function function1() {
  let pie = 888;
  console.log(pie); //888, if pie is not defined inside function, it takes global variable

  const age = 27;
  console.log(age);
}
// let age = 78;
// console.log(age); //78
function1(); // function call

// block scope
if (true) {
  const fullName = "James Docker";
  console.log(fullName);
  console.log(pie); //global variable
}

console.log(pie); //3.14, pie is global variable and can be accessed from anywhere

// console.log(age); // age is a function scope cannot be accessed from outside
// console.log(fullName); // fullName is a block scope cannot be accessed from outside
```

`Example 2`

```js
function example2() {
  var varVariable = "var";
  console.log(varVariable);
  // console.log(letVariable); // letVariable is defined inside if block, cannot access inside function scope

  if (true) {
    let letVariable = "let";
    console.log(letVariable);
  }
  // console.log(letVariable); //throws error, because letVariable is not defined outside the if block

  const constVariable = "const";
  console.log(constVariable);
}
// console.log(varVariable); //throws error, because varVariable is function scope and can't be accessed outside function

example2();
```

`Example 3`

```js
// Example 3 : let keyword
let i_am = "superman";

if (true) {
  let you_are = "god of thunder";
  let i_am = "batman";
  console.log(i_am); //returns batman, scope of i_am is the block scope
}

console.log(i_am); //returns superman, because i_am is global variable
// console.log(you_are); // you_are is inside block scope, cannot access outside of block scope
```

`Example 4`

```js
Example 4 : var keyword
var i_am = "superman";

if (true) {
  var you_are = "god of thunder";
  var i_am = "batman";
  console.log(i_am); //returns batman, scope of i_am is the block scope
}

console.log(i_am); //returns superman, because i_am is global variable
console.log(you_are); // returns god of thunder, because the scope of you_are is the global scope due to var keyword.
```

`Example 5`

![Alt text](let_var_scope.png)

```js
// Example 5
let x1 = 7;
console.log(x1);

// if (true) {
//   // var x1 = 50; //syntax error
//   // console.log(x1);
// }

function hello() {
  var x1 = 8;
  console.log(x1);
}
hello();
```

`Example 6`

![Alt text](var_scope.png)

`code`

```js
// Example 6
var x = 7; // global variable
console.log(x); // 7

if (true) {
  var x = 50;
  console.log(x); // 50
}

function world() {
  var x = 70;
  console.log(x); // 70
}
world();

console.log(x); // 50
```
