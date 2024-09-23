# Dictionary of Terms and Notes

### Odin Project
  - https://www.theodinproject.com/paths/foundations/courses/foundations#javascript-basics 

## Lecture Notes
  * Objects (W1D3) https://github.com/andydlindsay/sep16-2024/tree/main/w01d03
  * Callbacks (W1D4) https://github.com/FrancisBourgouin/lectures-web-ft-sep16-2024/tree/main/w1d4
  * TDD (W2D1)
  *  

## Recipe
  - Clarify Question
  - Define Inputs
  - Define Outputs
  - Prcoessing and Logic
  - Break code down into small steps - incremental solutions
      - Write out pseudocode for each step
  - 
  
### Terms

* Variables
  - var - function scoped or globally scoped
  - let - block scoped (inside loop or conditionals)
  - const - block scoped
* Terms
  - ! means no
  - ```.reduce``` 





* Scoping
  - Global - variable declared outside any function or block. Accessible anywhere
  - Function - variables declared within a function are scoped to that function. Accessible only within function
  - Block - variable confined to the block {} in which they are declared such as within 'it' or 'for'. Accessible within block

* # How we write a function
  ```
  function myFunction(a, b, c) {
    return a + b + c; }
* # Object Iteration
* For Loop to iterate over the objects in an array
```
  function printArrayElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Example usage:
const exampleArray = [1, 2, 3, 4, 5];
printArrayElements(exampleArray); 
```


*   ## For...in
  - Iterate over properties of an object
  - Loop through keys of object
```  
const person = {
    name: 'Alice',
    age: 25,
    city: 'New York'
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
```


* ## For...of
  - Iterate through objects
    - arrays, strings, maps, sets
    - if object is not iterable (plain object) ```TypeError```
  - Returns VALUES not keys
```
const greeting = 'Hello';

for (const char of greeting) {
    console.log(char);
}
```
  - Output: 
```
H
e
l
l
o
```

* ## forEach
  - Execute provided function once for each element in the array
  - Can iterate over elements without needining to manage the loop counter
```
array.forEach(callback(currentValue, index, array) {
    // Code to execute for each element
});
```


* Split
  - ```.split(/\s+/)``` divides string into an array, where each element corresponds to a part of the string that was separated by whitespace.
  - Example:
```
  
    const trimmedName = "John Doe Smith";
const nameParts = trimmedName.split(/\s+/);
console.log(nameParts); // ["John", "Doe", "Smith"]

```


*  ## Callbacks
  - A function we pass to another function as arguments
```  
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

// Passing sayGoodbye as a callback to greet
greet("Alice", sayGoodbye);
```

* Slice process arguments
* Arrays
* Data types
  - Primitive: String, number, boolean, undefined, null, symbol, bigInt
  - Reference: Objects, Arrays, Functions


* Objects
  - Key/value pairs
  - The key in an object is always a string
  - In arrays, use index to access a value
  - Use key to access value
  - Array is type of object

```
  const myObj = {
  firstName: 'Lorem',
  lastName: 'Ipsum'
};

// we have two options for accessing values
// dot syntax
console.log(myObj.firstName); // Lorem

// square bracket syntax
console.log(myObj['lastName']); // Ipsum
```
- Functions inside Objects
  - Objects are key/value pairs. Functions are values. You can store functions inside of an object
  - Refernce other properties in an object by using 'this'
```
const myObj = {
  firstName: 'Lorem',
  sayHello: function () {
    console.log('hello');
  }
};

myObj.sayHello(); // hello
console.log(myObj); // { firstName: 'Lorem', sayHello: [Function: sayHello] }
```  
  - Reference other properties in an object by using 'this'
```
const myObj = {
  firstName: 'Lorem',
  lastName: 'Ipsum',
  sayFullName: function () {
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  }
};

myObj.sayFullName(); // My full name is Lorem Ipsum
```
 - Object iteration with ```for...in```
    - Iterate through object's keys. CANT use ```for...of```
```
const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
  // we can use the key to access the value
  const value = obj[key];
}
```


* ## Data Structures
* ## Dot Syntax


* ## Function
    Implement a function with example

* ## Arrow Functions
  - Concise way to write functions
  - Annymous by nature
```
 const add = (a, b) => {
    return a + b;
};
```
```
const add = (a, b) => a + b; // Implicit return

```
```
const square = x => x * x; // No parentheses needed for single parameter
```
  - No binding of ```this```
    - Arrow functions dont have their own binding of ```this```
    - Useful for callbacks
```
function Counter() {
    this.count = 0;

    // Using a regular function would bind 'this' to the function itself
    setInterval(function() {
        this.count++; // 'this' is not the Counter instance
        console.log(this.count);
    }, 1000);
}

const counter = new Counter(); // NaN is printed

// Using an arrow function preserves 'this'
function Counter() {
    this.count = 0;

    setInterval(() => {
        this.count++; // 'this' refers to the Counter instance
        console.log(this.count);
    }, 1000);
}

const counter = new Counter(); // 1, 2, 3, ...

```
  - Use Cases:
    - Callbacks: commonly used in array methods ```.map()```, ```.filter()```, and ```.reduce()```
    - ```.reduce``` callback function on each element of the array, in order, passing return value from calculation on previous element
  - Arrow functions do not have their own ```arguments``` object
  - Not suitable for methods
  - Cannot be used as constructor function

* ## Template Literals

* ## Recursion
  - Recursive Case, Base Case 

* ## Command Line Arguments
  - Accessible via the ```process``` object: ```process.argv```
  - Allow you to pass information to your Node.js scripts

* ## Linting
 -  Eslint - analyze code for potential errors and enforces standard code
 - Debuggin procedures
 - How to decipher an error message

* ## Higher Order Functions
  - Functions that can take other functions as arguments or return functions as their output
  - Accepting functions as arguments
  - Can return another function

* ## Annonymous Functions
  - Functions that are defined without a name. Used as arguments to other functions, for callbacks
  or when defining functions that will not be reused
  - Useful when function only needed once or for specific context
  - Cannot be called again unless they are assigned to a variable or passed as an argument

* ## Modules
  - Node's way of organizing code into individual files
  - Allows you to resuse functionality accoss different parts of project
  - Dont need to copy paste code
    - Define code once in a module then import whenever needed
    - Reduces redundancy, makes codebase easier to maintain, and minimizes risks of error
  - every js file in node is implicitly a module
  - module.exports tells node what to export from a file. Defaults to {}
  - can use ```require``` with relative paths (doesn't need js extension)
  - ```const sayHelloTo = require('./myModule');```
* Node.js
  - Package manager: npm
    - Packages are self contained code libraries we can install and use in projects

* Unit Testing
  - Tells us if code is working
  - It's just: ```npm test```
  - Writing code that tests other code

```
// Example of a simple function
function largestNumber(array) {
  return array.reduce((previousValue, currentValue) => {  
    return Math.max(previousValue, currentValue);
  });
}

```
```
// Example of a test for that function
const array = [1,2,3,4,5];
const largest = largestNumber(array);
assert.equal(largest, 5);

```
  - Mocha and Chai packages to write automated tests
    - Mocha testing framework
    - Chai assertion library
    - BDD: Behavior Driven Development 
      -Write test to check behaviour of code
    - Mocha Instructions
      - Initialize a project as a num package
      - ```npm init -y``` 
      - not in test folder
       - Add test framework eg. 'mocha' to scripts
       - update scripts
       


* # Asynchronus Control Flow
  - ## Callbacks
    - Functions passed as arguments to be executed once an operation completes
```    
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});

```
  - ## Promises
   - Objects that represent the eventual completion (or failure) of an asynchronus operation
```
const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
};

fetchData().then((data) => {
    console.log(data);
});
```
  - Async/ Await
    - Syntax that allows you to write asynchronus code that looks synchronus, easier to read and maintain
```
const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
};

const getData = async () => {
    const data = await fetchData();
    console.log(data);
};

getData();
```
  - ## Error Handling
   -  handling errors in asynchronus code done with ```.catch()``` for promises or try/catch blocks with async/await
```
const fetchData = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Error fetching data");
        }, 1000);
    });
};

const getData = async () => {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

getData()
```
  -  ### Async control flow libraries
   - Libraries like ```async.js``` can provide additional control flow patterns like series, parallel, and waterfall for managing complex asynchronus workflows 















* Promises
* Object Manipulation
* SQL
* Algorithms
* APIs
* Refactoring





