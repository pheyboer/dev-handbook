# Technical Interview Prep

## Strategy
  - Introduce yourself
    - name, background, web dev experience (udemy), passion, what can you bring to the company
  - ASK
    - understand what is asked before you commit to writing code
    - Can I google (I can double check on MDN)
    - Can I use my notes
    - do you want this code to execute
    - do you want me to start with pseudocode
    - what type of function (code style)
    - should i handle errors
  - DISCUSS
    - define inputs and write all out in pseudo code first in comments
    - write out in comments and establish params
    - establish example object if needed as output
    - establish example array if needed as output
  - SOLVE
  - TEST
  - Be honest
  - Pseudo code
  - Are you going to handle edge cases?
  - What kind of values are there?
  - How big is the size of the input?
  - How is the input stored?
  - Discuss multiple approaches
  - Only start coding after an approac is agreed on
  - Talk out loud as you code
  - Solution is not as important as how you work on getting the solution
  - Test and debug code - Rubber Ducky
  - If you dont know, how would you find the answer
  - walk through how the function should run

## @param
  - annotate parameters of method or function
  - label at top in comments

## Functions (arrow functions)
  - function declaration:
  - function expressions: defines a function as part of an expression and can be assigned to variable
  - arrow functions: es6 concise way to write functions
  - functions have a return value

```js
Expression:
const myFunction = function(param1, param2) {
  return param1 +  param2;
}
Declaration:
function myFunction(param1, param2) {
  return param1
Arrow:
const sum = (a, b) => a + b;
}
```
## Callback
  - function passed as arugment to another function so it can be called later
## Promise
  - container for a future value
  - lottery ticket
  - .then handles resolve (returns promise for chaining)
  - .catch handles reject
  - .then synchronus
  - .all parallell
## Loops
  - USE FOR IN TO ITERATE OVER OBJECT
  - for loop: iterating through an ARRAY
  - while loop: run block of code as long as condition true
  - for...in loop: iterate over OBJECT
  - for...of loop: iterate over values in objects (arrays,strings)
  - forEach(): iterate over array. Takes callback and up to 3 parameters
## Arrays
  - array iteration for...of loop
  - ordered collection of elements
  - functional array methods:
  - forEach
  - .map
  - .filter
  - .reduce
  
## Variables
  ### What is the difference between var, let and const
    - var: Function scoped or global scoped. Can be re-declaread and updated within the same scope
    - let: block scope. hoisted. resassignment possible
    - const: block scope. hoisted. TDZ. cannot be reassigned
## Equality Operators
  - Strict equality === : value and type. no type coercion
  - Loose equality == : compares values only. allows type coercion
## this keyword
  - refers to current execution context
  - global - window Objects
  - regular function (not arrow) - refers to object that invoked the function
  - arrow functions inherit ```this``` from surrounding context
## Hoisting
  - behavior of moving declarations to the top of their scope during compilation phase
  - function declarations are hoisted but not initalized until declaration
  - var hoisted (not initalization). let and const hoisted but not initalized until declaration (TDZ)
## Truthy vs Falsy
  - how values are evaluataed in boolean contexts - coerce to true or false
  false — the boolean value false
  - 0 — the number zero (both positive 0 and negative -0)
  - "" (empty string) — an empty string (string with no characters)
  - null — the absence of any value or object
  - undefined — the value of a variable that has been declared but not assigned a value
  - NaN — "Not-a-Number", a result of an invalid arithmetic operation
  - 0n — the BigInt zero
## Null vs Undefined
  - primitive values that represent the absence of a value
  - undefined: property does not exist, returned by function that doesnt return anything, variable declared but not assigned a value
  - null: no value/nothing
## Spread Operator
  - expand elements from iterables into individual elements
  - iterables are Arrays, Strings, Maps, Sets, Generators
    - use for...of loop
## Template Literals
  - provides a way to work with strings (ES6) 
  - allows embedding expressions

## Objects
  - collection of key value pairs. each key (property) is a string and corresponding value is any data type
  - access with dot notation or bracket notation
## Callbacks
  - ensure function is executed after certain task is finished
  - passed as arugment to another function and is invoked (called back) when outer function is finished
  - handles async operations
## setTimeout vs setInterval
  - timeout: execute code after one-time delay
  - interval: execute code at specified interval
## Closures
  - allows function to remember its lexical scope
  - when a function is defined inside another function
  - gives access to outer function variables even after outer function has returned
## Promises
  - handle async operations
  - represents a value that may be avaiable now, future, or never
  - Pending, Fulfilled, Rejected
```js
  const boilWater = () => {
  return new Promise((resolve) => {
    // Simulate boiling water
    resolve();
  });
};

const pourWater = () => {
  return new Promise((resolve) => {
    // Simulate pouring water
    resolve();
  });
};

// Execution below using promises
boilWater()
  .then(() => pourWater())
  ```

  - Difference between using ```Promise.all()``` vs. chaining Promises together using ```.then()```
    - order of execution and handling of multiple promises 
      - ```.then()``` sequential 
      - ```Promise.all()``` parallel
    - when you chain with ```.then()```, promises are exexuted sequentially in order of chain
      - the next ```.then()``` executes after the previous promise resolves
      - if one rejects, rest of promises will be skipped and will go to ```.catch```
    - ```Promise.all()``` execute multiple promises in parallel and wait for resolve before proceeding
      - all promises in the array start at the same time
## Async vs sync
  - sync: tasks performed one after another
  - async: tasks can run independently from main thread




# Example Problem 1

Get Employees by Department (Arrays Practice)
You are working on a Node.js application that manages a list of employees in a company. The employee data is represented as an array of arrays, where each inner array contains information about an employee. The inner array follows the format [name, position, department].

Your task is to implement a function that retrieves all the employees in a specific department from the employee data array. Write a function called getEmployeesByDepartment that takes two parameters: employees (the array of employee data) and department (the department name). The function should return an array of employees who belong to the specified department.

Here are the requirements for the function:

The employees array contains multiple inner arrays, where each inner array represents an employee and contains three elements: name, position, and department. For example: ['John Doe', 'Software Engineer', 'Engineering'].
The function should search through the employees array and extract all the employees who belong to the specified department.
The function should return an array of employee names who belong to the specified department.
If there are no employees in the specified department, the function should return an empty array.
The function should not modify the original employees array.
Your task is to implement the getEmployeesByDepartment function according to the requirements.
Here is an example data-set:
```js
const employees = [
  // Name       // Position        // Department
  ['John Doe', 'Software Engineer', 'Engineering'],
  ['Jane Smith', 'Product Manager', 'Product'],
  ['Mike Johnson', 'Sales Executive', 'Sales'],
  ['Emily Brown', 'HR Coordinator', 'Human Resources'],
  ['David Lee', 'Quality Assurance', 'Engineering']
  // 0              // 1              // 2
];
```

# Example Problem 2

Write a function that will extract the usernames of users with less than 180 posts and return it in an array.

```js
const users = {
  "[email protected]": {
    username: "JavaJolt",
    bio: "Coffee enthusiast and home roaster. Always chasing the perfect roast.",
    posts: 120,
  },
  "[email protected]": {
    username: "RoastMaster5000",
    bio: "Professional coffee roaster with a passion for experimenting with unique beans and profiles.",
    posts: 280,
  },
  "[email protected]": {
    username: "EspressoAddict",
    bio: "Espresso lover, always seeking that perfect shot. Sharing tips on achieving espresso nirvana.",
    posts: 220,
  },
  "[email protected]": {
    username: "AromaExplorer",
    bio: "Adventurous coffee traveler exploring the world one bean at a time. Documenting unique aromas and flavors.",
    posts: 150,
  },
  "[email protected]": {
    username: "MellowRoasts",
    bio: "Advocate for low-acidity, mellow coffee roasts. Exploring the soothing side of coffee.",
    posts: 90,
  },
};

const getUsersWithLessThan180Posts = (users) => {
  // Initialize an empty array to store usernames
  const result = [];

  // Loop through the users object
  for (const userKey in users) {
    // Check if the user has less than 180 posts
    if (users[userKey].posts < 180) {
      // Add the username to the result array
      result.push(users[userKey].username);
    }
  }

  return result;  // Return the array of usernames
};

// Example usage
const usernames = getUsersWithLessThan180Posts(users);
console.log(usernames);  // Output: ["JavaJolt", "AromaExplorer", "MellowRoasts"]
```
# Example Problem 3

In the code below, why is the callback function wrapped inside an anonymous function?
```js

const outputContentForUser = (name, data) => {
  console.log(`Hello ${name}`);
  console.log("Here is the content of the file...");
  console.log(data);
};

readFile((data) => outputContentForUser("Bob", data));
//the callback function is wrapped inside an anonymous function in this line:

readFile((data) => outputContentForUser("Bob", data));
```
The reason the callback is wrapped inside an anonymous function is to pass additional arguments (in this case, "Bob") to the outputContentForUser function, while still allowing the callback to receive the data from readFile.

## Promises Example Problem

We need to boil some water and pour it, create two functions representing each of those steps and call them in a way that they will execute one after the other using promises.
```js
// Question code

const boilWater = () => {
  // ...
  return new Promise((resolve) => {
    resolve("water boiled");
  });
};

const pourWater = () => {
  // ...
  return new Promise((resolve) => {
    resolve("water poured");
  });
};

// Execution below
boilwater()
  .then((message) => {
    console.log(message);
    return pourWater;
  })
  .then((message) => {
    console.log('water poured');
  });
```
- if you want to use ```.catch``` you have to pass in reject
  - .then() handles the resolved promise (success).
  - .catch() handles the rejected promise (failure).

### Promise.all vs .then chaining
  - order of execution
  - .then() sequential
  - .all parallell