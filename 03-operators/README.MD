# OPERATORS

- [OPERATORS](#operators)
  - [Arithmetic Operator](#arithmetic-operator)
  - [Comparison Operator](#comparison-operator)
  - [Logical operators](#logical-operators)
  - [Assignment operators](#assignment-operators)
  - [Four Important Operators](#four-important-operators)
    - [OR Operator](#or-operator)
    - [AND OPERATOR](#and-operator)
    - [NULLISH COALESCING OPERATOR](#nullish-coalescing-operator)
    - [TERNARY OPERATOR](#ternary-operator)
    - [Differences between OR(||) and ?? Operator](#differences-between-or-and--operator)

## Arithmetic Operator

used for mathematical operations like addition (+), subtraction (-), multiplication (\*), division (/), modulus (%), and exponentiation

```
  let x = 10;
  let y = 20;
  let result;

  result = x + y;
  console. ('Addition: ' result);

  result = x - y;
  console.log('Subtraction: ' result);

  result = x * y;
  console.lo ('Multiplication: ' result);

  result = x / y;
  console.log(Division: ' result);

  result = x % y;
  console.log('Modulus: ' result);
```

## Comparison Operator

used for comparing values and evaluating to a boolean value (e.g. equal to (==), not equal to (!=), greater than (>), less than (<), greater than or equal to (>=), less than or equal to (<=)).

```
// comparison operator
  let x = 5,
  y = 2;
  console.log(x == y); // false
  console.log(x != y); // true
  console.log(x > y); // true
  console.log(x < y); // false
  console.log(x >= y); // true
  console.log(x <= y); // false
```

## Logical operators

used for combining and manipulating boolean values (e.g. AND (&&), OR (||), NOT (!).

```
  // Logical. operator
  let x = true,
  y = false;
  console.log(x && y); // false
  console.log(x 11 y); // true
  console.log(!x); // false

```

## Assignment operators

used for assigning values to variables (e.g. =, +=, -=, \*=, /=, %=, \*\*=).

```
  // assignment operator
  let x = 5;
  x += 3; // x is now 8
  x *= 2; // x is now 16
  x /= 4; // x is now
  x %= 2; // x is now 0

```

## Four Important Operators

1. OR OPERATOR (||)
2. AND OPERATOR (&&)
3. NULLISH COALESCING OPERATOR (??)
4. TERNARY OPERATOR (X?TRUE:FALSE)

### OR Operator

If the first value is true, the final output is the first value, it doesn't look for other true values, however if first value is false, it looks for other true values and if all values are false: the final output is the last value.

```
    console.log(3 || "Gyamzo"); // both are true values, output: first true value, i.e. 3
    console.log("" || "Messi"); // "":empty, falsy value, output: "Messi"
    console.log(" " || "Ozil"); // " "
    console.log(true || 0); // 0 is falsy value, output: true
    console.log(undefined || null); // both are falsy values, last falsy value is the final output, null
    console.log(NaN || 0); // 0 is the last falsy value
    console.log(0 || "Gyamzo" || false || ""); // Gyamzo is the only true value, output: Gyamzo
    console.log(0 || "Gyamzo" || false || "" || "messi"); // Gyamzo is the first true value, output:

    // example:
    let newData;
    const newValue = newData || "some values";
    console.log(newValue); //newData is undefined which is falsy values, so it looks for other true value, therefore output = "some values"
```

### AND OPERATOR

If all values are true, the last value is the final output, if all values are false, the first value is the final output and if there are mix of true and false values, output is always false

```
    console.log("Gyamzo" && "Messi"); //Messi
    console.log("" && "Messi"); //"" is falsy value, so output = ""
    console.log(NaN && 0); //both falsy values, first falsy value is the final output
    console.log(undefined && "Gyamzo"); // in AND operator, both conditions should be true or false.
    console.log("Messi" && "Gyamzo"); // both are true values, last truthy value is the final output.

    // example:
    let data = "123";
    const value = !null && Boolean(data) && "hello";
    console.log(value); //all are true values, "hello" is the last true value, so output = "hello"

    let data2;
    const value2 = !null && Boolean(data2) && "hello";
    console.log(value2); // false, because data2 is undefined and in AND operator, if one value is false, the output is false.
```

### NULLISH COALESCING OPERATOR

The ?? operator is used for providing a default value when a value is null or undefined, but it will not provide the default value for other falsy values like 0 or an empty string. It functions like OR operator

```
    console.log(undefined ?? "Messi");
    console.log("hhh" ?? "Messi"); //hhh, which is the first true value
    console.log(null ?? true);
    console.log("" ?? true);
    console.log(true ?? undefined);
    console.log(false ?? null);
    console.log(true ?? 45); // true is the first truthy values
    console.log(45 ?? true ?? false); // 45 is the first truthy values
    console.log(undefined ?? 55 ?? true ?? false); // 55 is the first truthy values
    console.log(4 > 6 ?? true); // 4>6 = false, which is the first truthy values
    console.log(true ?? 4 > 6); // true, which is the first truthy values
    console.log([1, 2, 3] ?? true); // [1,2,3]

    //example:
    let newValue2 = null;

    const x1 = newValue2 ?? "SOME VALUE";
    console.log(x1); //SOME VALUE

    // Some examples of how the nullish coalescing operator can be used:

    // 1. Setting Default Values
    // const hello; //error: we have to initialize value declaring value with const

    let newName;
    console.log(newName ?? "Guest"); //In this example, if newName is null or undefined, the value of username will be set to "Guest".

    // 2. API Responses:
    // When dealing with API responses, some properties might be optional and not always present. The nullish coalescing operator can  help extract values safely.

    const responseData = {
      user: {
        id: 123,
        name: "Gyamzo",
      },
      message: "Success",
    };

    const userName = responseData.user.name ?? "Unknown";
    userName; //If responseData.user.name is null or undefined, userName will be set to "Unknown".
    console.log(responseData.user.address ?? "Unknown"); //unknown

    // 3. Function Parameters:
    // When you have function parameters that might be missing, you can use the nullish coalescing operator to provide default values.

    function greetUser(name) {
      name = name ?? "Guest";
      console.log(`Hello, ${name}!`);
    }

    // greetUser(); // Output: Hello, Guest!
    greetUser("Alice"); // Output: Hello, Alice!
```

### TERNARY OPERATOR

```
    // x ? "true" : "false"

    let firstName = "Gyamzo";
    const newUser = firstName ? "Mr." + "" + firstName : "unknown user";
    console.log(newUser);

    // let firstName = "Gyamzo";
    // if (firstName) {
    //   const newUser = "Mr." + "" + firstName;
    // } else {
    //   newUser = "unknown user";
    // }
    // console.log(newUser);
```

### Differences between OR(||) and ?? Operator

Use || when you want to provide a default value for any falsy value, including null and undefined. This can be useful in cases where you want a fallback value for a variety of potential falsy values.

Use ?? when you want to provide a default value only for null or undefined, explicitly excluding other falsy values. This is useful when you want to handle only truly missing values and not accidentally overwrite other falsy values.

Example 1: Suppose you have a variable count that could be 0, and you want to provide a default value in case it's falsy:

```
    const result1 = count || 10; // This will provide a default for 0 as well (which might not be intended)
    const result2 = count ?? 10; // This will only provide a default for null or undefined
```

In this example, if count is null or undefined, result1 would be 10 (which might be unexpected), while result2 would be 10 only if count is null or undefined.

Example 2:
Imagine you're building a user profile page for a website, and you want to display a user's name on the page. However, not all users might have provided their names. You want to display a default name if the user's name is missing or empty.

```
    // Sample user data
    const user1 = {
      name: "John Doe",
    };

    const user2 = {
      name: "", // Empty name
    };

    const user3 = {
      // Name property missing
    };

    // Using the || operator
    const displayName1 = user1.name || "Guest";
    const displayName2 = user2.name || "Guest";
    const displayName3 = user3.name || "Guest";

    // Using the ?? operator
    const displayName4 = user1.name ?? "Guest";
    const displayName5 = user2.name ?? "Guest";
    const displayName6 = user3.name ?? "Guest";

    console.log(displayName1); // Output: John Doe
    console.log(displayName2); // Output: Guest (empty string is falsy)
    console.log(displayName3); // Output: Guest (property is missing)
    console.log(displayName4); // Output: John Doe
    console.log(displayName5); // Output: "" (empty string is not null or undefined)
    console.log(displayName6); // Output: Guest (property is missing)
```

In this example, the behavior of the || operator causes unexpected results for displayName2 and displayName3. The empty string (displayName2) and the missing property (displayName3) both result in the default value being used. On the other hand, the ?? operator handles the nullish values as intended and gives the expected results for all cases.

By using the ?? operator, you ensure that you're only providing a default value for explicitly null or undefined values, which is more appropriate in scenarios where you want to handle missing or undefined data.
