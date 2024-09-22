# Dictionary of Terms and Notes

## Lecture Notes
  * Objects (W1D3) https://github.com/andydlindsay/sep16-2024/tree/main/w01d03
  * Callbacks (W1D4) https://github.com/FrancisBourgouin/lectures-web-ft-sep16-2024/tree/main/w1d4 

## Recipe
  - Clarify Question
  - Define Inputs
  -  Define Outputs
  -  Prcoessing and Logic
  -  Break code down into small steps - incremental solutions
  
### Directories
  * Useful commands
    - mkdir to make directory
    - cd to change directory
    - touch to create file

### Git
  * Initialize
    - git init
  * Add file
    - git add
  * Commit changes
    - git commit -m "message"
  * Push to github
    - git push
  * Git cloning
    - Go to directory
    - clone repository
    - git init (be careful for nested git repositories)
    - git clone (use SSH)
  * Git for Lighthouse Testing
    - git clone
    - go to directory
    - get token from compass
    - npm run start-exam (token)


### Terms

* Variables
  - var - function scoped or globally scoped
  - let - block scoped (inside loop or conditionals)
  - const - block scoped

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


*  For...in

* For...of

* forEach



* Callbacks
  - A function we pass to another function
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


* Data Structures
* Dot Syntax


* Function
    Implement a function with example

* Arrow Functions
  - Annymous by nature
  - 

* Template Literals

* Recursion
  - Recursive Case, Base Case 

* Command Line Arguments
  - Accessible via the ```process``` object: ```process.argv```
  - Allow you to pass information to your Node.js scripts

* Linting
 -  Eslint - analyze code for potential errors and enforces standard code
 - Debuggin procedures
 - How to decipher an error message

* Higher Order Functions
  - Functions that can take other functions as arguments or return functions as their output
  - Accepting functions as arguments
  - Can return another function

* Annonymous Functions
  - Functions that are defined without a name. Used as arguments to other functions, for callbacks
  or when defining functions that will not be reused
  - Useful when function only needed once or for specific context
  - Cannot be called again unless they are assigned to a variable or passed as an argument

* Modules
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
    - BDD: Behavior Driven Development 
      -Write test to check behaviour of code
    - Mocha: name test folder test, this is where it finds test files
    - ```describe``` and ```it``` to set up unit test
    - ```assert``` for unit tests
    - Don't create failing tests. Disrupts mocha/chai workflow


* Asynchronus Control Flow
* Promises
* Object Manipulation
* SQL
* Algorithms
* APIs
* Refactoring





