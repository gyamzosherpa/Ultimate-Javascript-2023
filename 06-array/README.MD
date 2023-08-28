# Array

Table of Contents

- [Array](#array)
  - [Array Definition](#array-definition)
    - [Array.at (ECMA 2022)](#arrayat-ecma-2022)
  - [Array built-in methods](#array-built-in-methods)
    - [Array.from()](#arrayfrom)
    - [splice()](#splice)
    - [slice()](#slice)
    - [push(), pop(), shift(), unshift()](#push-pop-shift-unshift)
    - [sort()](#sort)
    - [indexOf()](#indexof)
    - [lastIndexOf()](#lastindexof)
  - [Nested Array](#nested-array)

## Array Definition

1. An array is an ordered list of values.
2. Each value is called an element specified by an index.
3. An array can hold values of mixed types. For example, you can have an array that stores elements with the types number, string, and Boolean.
4. Array element starts from index no. 0. "[ ]" is used to create an array

```js
// let array1 = new Array[('Gyamzo',26,'Swayambhu')];
let array1 = ["Gyamzo", 26, "Swayambhu"];

// update
array[1] = 27;
console.log(array1); //Gyamzo, 27, Swayambhu
```

You can access elements in an array by using the square brackets and the index of the element that you want to access. The index of an array starts from 0 and goes up to the length of the array minus one.

```js
let arr = [1, 2, 3, 4, 5];

//To access the first element of the array, you would use:
let firstElement = arr[0];

//To access the last element of the array, you would use:
let lastElement = arr[arr.length - 1];

//You can also modify elements in an array by assigning a new value to a specific index:
arr[2] = 42; // [1,2,45,4,5]
```

### Array.at (ECMA 2022)

New feature of ECMA 2022, better performance.

```js
//array.at(): ECMA 2022 NEW FEATURE
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1[4]); //5
console.log(arr1[-1]); //undefined
console.log(arr1.at(-1)); //5
console.log(arr1.at()); // 1, shows 1st value
```

Previously, we couldn’t use negative value to access element, but the new feature i.e., array.at() solve this issue.

## Array built-in methods

### Array.from()

```js
// from - creates an array from an object
const new_array = [1, 2, 3, 4, 5];
const final = Array.from(new_array);
console.log(final); // [1,2,3,4,5]
```

### splice()

splice(start, deleteCount, [item1 [, item2 [, ...]]]):

The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The start parameter specifies the starting index of the change and the deleteCount parameter specifies the number of elements to be removed. Additional elements to be added can be specified as arguments after the deleteCount parameter. The splice() method returns the removed elements as a new array.

Example: `splice()`

```js
let numbers = [2, 3, 4, 5];
let removed = numbers.splice(0, 2, 0, 1);
console.log(numbers); // [0,1,4,5]
console.log(removed); //[2,3]
```

In this example, the splice() method is used to remove the first two elements of the numbers array and add the numbers 0 and 1 in their place. The splice() method returns the removed elements as a new array, which is logged to the console.

### slice()

slice(start, [end]):
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified. If end is omitted, slice() extracts to the end of the array.

Example: `slice()`

```js
let numbers = [0, 1, 2, 3, 4, 5];
let sliced = numbers.slice(2, 4);
console.log(numbers); // [0,1,2,3,4,5]
console.log(sliced); // [2,3]
```

In this example, the slice() method is used to extract the elements of the numbers array from index 2 to index 4 (not included) into a new array. The original array remains unchanged, and the new array is logged to the console.

Here's a real-world example of using the slice() and splice() methods in a project:

Imagine you're building a web application for a to-do list, and you want to allow users to add, remove, and rearrange tasks. The tasks are stored in an array, and you want to use the slice() and splice() methods to manipulate the tasks.

Example: `splice() and slice()`

```js
//slice() and splice()
let tasks = ["Take out the trash", "Buy groceries", "Clean the kitchen"];

// Use slice() to copy a portion of the tasks array
let newTasks = tasks.slice(1, 3);

console.log(newTasks);
// Output: [ 'Buy groceries', 'Clean the kitchen' ]

// Use splice() to add a new task to the tasks array
tasks.splice(3, 0, "Do laundry");
console.log(tasks);
// Output: [ 'Take out the trash', 'Buy groceries', 'Clean the kitchen', 'Do laundry']

// Use splice() to remove a task from the tasks array
tasks.splice(2, 1);
console.log(tasks);
// Output: [ 'Take out the trash', 'Buy groceries', 'Do laundry' ]
```

In this example, the tasks array is created to store the to-do tasks. The slice() method is then used to create a new array called newTasks that contains a portion of the tasks array, starting from index 1 and ending at index 2. The splice() method is then used to add a new task to the tasks array by specifying the index 3, the number of elements to remove (0), and the new task to add. The splice() method is then used again to remove a task from the tasks array by specifying the index 2 and the number of elements to remove (1). The results of the tasks array are logged to the console after each operation to show the updated state of the tasks array.

### push(), pop(), shift(), unshift()

push(element1, element2, ..., elementX): The push() method adds one or more elements to the end of an array and returns the new length of the array.

pop(): The pop() method removes the last element from an array and returns the removed element.

shift(): The shift() method removes the first element from an array and returns the removed element.

unshift(element1, element2, ..., elementX): The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

Example: `push(), pop(), shift(), unshift()`

```js
// push : add elements
let numbers = [];
numbers.push(0, 1, 2);
console.log(numbers); // [0,1,2]

// pop: removes last element
let last = numbers.pop();
console.log(numbers); // [0,1]
console.log(last); // [2]

// shift: removes the first element
let first = numbers.shift();
console.log(numbers); // [1]
console.log(first); // [0]

// unshift: adds one or more elements to the beginning of an array
numbers.unshift(-1, -2, -3);
console.log(numbers); // [-1,-2,-3,1]
```

In this example, the push() method is used to add the numbers 0, 1, and 2 to the numbers array. The pop() method is then used to remove the last element from the numbers array, which is logged to the console. The shift() method is used to remove the first element from the numbers array, which is also logged to the console. Finally, the unshift() method is used to add the numbers -1, -2, and -3 to the beginning of the numbers array, which is logged to the console.

### sort()

sort(): Sorts the elements of an array in place and returns the array

Example: `sort()`

```js
//sort
let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numbers.sort();
console.log(numbers); // [1,1,2,3,3,4,5,5,5,6,9]
```

### indexOf()

The indexOf() method is used to find the first index of an element in an array that matches a specified value. If the element is not found, the indexOf() method returns -1.

Example: `indexOf()`

```js
//indexOf()
let colors = ["red", "green", "blue"];

let index = colors.indexOf("green");
console.log(index); // 1

index = colors.indexOf("yellow");
console.log(index); // -1
```

In this example, the colors array is created and contains three elements: 'red', 'green', and 'blue'. The indexOf() method is then used to find the index of 'green' in the colors array. The result is logged to the console and is 1, since 'green' is the second element in the array. The indexOf() method is then used again to find the index of 'yellow' in the colors array. The result is logged to the console and is -1, since 'yellow' is not in the colors array.

### lastIndexOf()

The lastIndexOf() method is used to find the last index of an element in an array that matches a specified value. If the element is not found, the lastIndexOf() method returns -1.

Example: `lastIndexOf()`

```js
//lastIndexOf()
let numbers = [1, 2, 3, 4, 3, 2, 1];

let index = numbers.lastIndexOf(3);
console.log(index); // 4

index = numbers.lastIndexOf(5);
console.log(index); // -1
```

In this example, the numbers array is created and contains seven elements. The lastIndexOf() method is then used to find the last index of the number 3 in the numbers array. The result is logged to the console and is 4, since 3 is the last occurrence of the number 3 in the numbers array. The lastIndexOf() method is then used again to find the last index of the number 5 in the numbers array. The result is logged to the console and is -1, since 5 is not in the numbers array.

## Nested Array

Nested arrays can be created by simply including one or more arrays inside another array, separated by commas.

```js
//concat: copy array or join array
let array2 = ["Books", "fruits", "movies"];
let array3 = ["netflix", "coffee"];
let array4 = ["London"];
//let finalArray = array2.concat(array3).concat(array4);
let finalArray = array2.concat(array3, array4);
console.log(finalArray);

//nested arrays
let books = [["Physics", 200]];
["Chemistry", 300], ["Computer", 500];

//access Computer
let computerBook = books[2][0];
console.log(computerBook);
```
