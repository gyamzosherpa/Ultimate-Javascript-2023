# function

The function is a block of code to perform a specific task. So, you don’t have to write the code for the same task again and again but create a function and call it wherever the task needed to be performed. “function” is a keyword to create a function.

![Alt text](images/00-function.png)

```
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

```
  function greet(name) {
    console.log("Hello", +name + "!");
  }

  let userName = "John Doe";
  greet(userName); // Hello, John Doe!

```

In this example, the greet function takes a single parameter, name, which is used to receive the value passed to the function when it is called. The userName variable is defined to store the string "John Doe", which is then passed as an argument to the greet function when it is called on the last line of the code

Example:

![Alt text](images/03-parameters.png)

## The arguments object

In JavaScript, every function has a special object called the arguments object, which provides access to the arguments passed to the function. The arguments object in JavaScript is an array-like object accessible inside functions that contain the values of the arguments passed to that function. By using an argument object, you don’t need to define parameters.

Here's an example:

```
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
