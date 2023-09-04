# CLOSURE

## Definition

A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables - `scope chain`

The closure has three scope chains:

- It has access to its own scope variables defined between its curly brackets.
- It has access to the outer function's variables.
- It has access to the global variables.

`Example`

```js
function outer() {
  var b = 100;
  function inner() {
    var a = 200;
    console.log(a + b);
  }
  return inner;
}
const X = outer(); // first invoke
console.log(X); // output => function inner()
X(); // output => 300
```

Here we have two functions:

- an outer function(outer) which has a variable b, and returns the inner function.
- an inner function(inner) which has its variable a, and accesses an outer variable b, within its function body.

![Alt text](closure.png)

---

Another Example:

```js
function outerFunction(outerValue) {
  // This inner function is a closure because it "closes over" the outerValue parameter.
  function innerFunction(innerValue) {
    return outerValue + innerValue;
  }

  return innerFunction;
}

// Create two closures with different outerValues
const closure1 = outerFunction(10);
const closure2 = outerFunction(20);

// Use the closures to add values to their respective outerValues
console.log(closure1(5)); // Output: 15 (10 + 5)
console.log(closure2(5)); // Output: 25 (20 + 5)
```

> In this example:

- outerFunction takes an outerValue parameter and defines an innerFunction within it.
- innerFunction is a closure because it references the outerValue variable from its containing scope, even after outerFunction has finished executing.
- When we call outerFunction(10), it returns innerFunction with outerValue set to 10, creating a closure. Similarly, outerFunction(20) creates another closure with outerValue set to 20.
- When we later call closure1(5), it adds 5 to the outerValue of the first closure, resulting in 15. Likewise, closure2(5) adds 5 to the outerValue of the second closure, resulting in 25.
