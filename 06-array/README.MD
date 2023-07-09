# array

1. An array is an ordered list of values.
2. Each value is called an element specified by an index.
3. An array can hold values of mixed types. For example, you can have an array that stores elements with the types number, string, and Boolean.
4. Array element starts from index no. 0. "[ ]" is used to create an array

```
  // let array1 = new Array[('Gyamzo',26,'Swayambhu')];
  let array1 = ['Gyamzo',26,'Swayambhu'];

  // update
  array[1] = 27;
  console.log(array1); //Gyamzo, 27, Swayambhu
```

You can access elements in an array by using the square brackets and the index of the element that you want to access. The index of an array starts from 0 and goes up to the length of the array minus one.

```
  let arr = [1,2,3,4,5]

  //To access the first element of the array, you would use:
  let firstElement = arr[0];

  //To access the last element of the array, you would use:
  let lastElement = arr[arr.length - 1];

  //You can also modify elements in an array by assigning a new value to a specific index:
  arr[2] = 42; // [1,2,45,4,5]
```

## Array.at (ECMA 2022)

New feature of ECMA 2022, better performance.

```
  //array.at(): ECMA 2022 NEW FEATURE
  const arr1 = [1, 2, 3, 4, 5];
  console.log(arr1[4]); //5
  console.log(arr1[-1]); //undefined
  console.log(arr1.at(-1)); //5
  console.log(arr1.at()); // 1, shows 1st value

```

Previously, we couldn’t use negative value to access element, but the new feature i.e., array.at() solve this issue.
