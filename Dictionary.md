# Dictionary of Terms and Notes

# Tech Interview

### Odin Project
  - https://www.theodinproject.com/paths/foundations/courses/foundations#javascript-basics 

### UDEMY
  - https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22628657#overview

## Lecture Notes
  * Objects  https://github.com/andydlindsay/sep16-2024/tree/main/w01d03
  * Callbacks  https://github.com/FrancisBourgouin/lectures-web-ft-sep16-2024/tree/main/w1d4
    - https://vimeo.com/1015946338/633db77663
    - https://github.com/andydlindsay/flex-sep23-2024/tree/main/m01w02-2
  * TDD 
  * Asynchronus Control Flow https://github.com/andydlindsay/sep16-2024/tree/main/w02d02
  * Networking and HTTP
    - Part 1: https://vimeo.com/1012900013/6c1c4c8c17
    - Part 2: https://vimeo.com/1012899907/ee980ed2ae?share=copy 
  * Promises https://vimeo.com/1023023372/115ef98d8a?share=copy
    - My cohort: https://github.com/letsandeepio/2024-09-23-Sep-23-Flex/tree/main/w5-promises
    - video : https://vimeo.com/1023314847/4fbf0205a6?share=copy
  * Web Servers https://vimeo.com/960857186/ea63eff652
    - code repo https://github.com/andydlindsay/flex-may13-2024/tree/main/m03w06-1
  * CRUD: https://github.com/letsandeepio/2024-09-23-Sep-23-Flex/tree/main/w6-CRUD_with_express
    - https://docs.google.com/presentation/d/1AEk4UVsEeggDgSzO0vKO2caWPAtDqwr-4t7vw7-GKFY/edit#slide=id.p
  * CSS
    - lecture notes here good css info and example pikachu
    - https://github.com/senhorgomes/lectures-flex-sep-23/tree/main/m3w8
  * DOM and JQUERY
    - https://github.com/letsandeepio/2024-09-23-Sep-23-Flex/tree/main/w8-client-side-javascript-jquery
  * AJAX
    - https://github.com/senhorgomes/lectures-flex-sep-23/tree/main/m3w9/AJAXLecture
  * SQL
    - https://web.compass.lighthouselabs.ca/p/web-flex-2/activities/220/lectures/15297?workbook_id=web-flex-v2-m05w11 
    - PostgreSQL peterheyboer pass lighthouse
    - LightBnB Instructions:
      - cd /home/peterheyboer/lighthouse/LightBnB
      - ```sudo service postgresql start``` peter heyboer lighthouse every time
      - sudo -u postgres psql -d lightbnb
      - \i migrations/01_schema.sql

    


  
## Test Topics
 - Test 1:
    - Count numbers in Array
    - Sum numbers of Array - can use ```.reduce```
    - Find the mean of an Array
    - Find the minimum Value of an Array
    - Find the maximum value of an Array
    - Find the range of an Array - can use ```.sort```
    - Find the meadian value of an Array
    - Find the Mode of an Array
    - Find the Standard Deviation of an Array
    - Review of test 1: will use ```.sort``` on test 2
  - Test 2:
    - All of test 1 topics
    - Functions as Objects
    - Comparisons (how to tell if two arrays are equal)
    - Callbacks
  - Test 3:
    - Test 1 and 2 topics
    - The test consists of 5 questions, primarily centered around general JavaScript (not Express or the browser-related topics we've covered recently). You can expect to engage with arrays, objects, algorithms, and recursive functions, with a strong emphasis on logical reasoning.
    - Review: Intro to Async, Music Library, Week 3, Array and object manipulation, Callbacks
  - Test 4:
    - asynchronus control flow using callbacks
    - one stretch question on promises
  - Test 5: SQL
    - ability to craft SQL SELECT statements
    
  ## For testing use node version 10 (nvm use 10) regularly use node version 20 (nvm use 20)


## Technical Interviews
  - Ask clarifying questions
    - What kind of values are there?
    - How big is the size of the input?
    - How is the input stored?
  - Topics: First Interview
    - JavaScript fundamentals
    - Coding best practices and readability
    - Async vs. Sync code execution
    - Writing functions
    - Using loops and objects
 - Topics: Second Interview
    - ERD
    - Table relationships
    - Using loops and objects
## Recipe
  - Clarify Question
  - Define Inputs
  - Define Outputs
  - Prcoessing and Logic
  - Break code down into small steps - incremental solutions
      - Write out pseudocode for each step

## Example Technical Interview Question
  - video: https://vimeo.com/1024956107/7ec592c4a7?share=copy
  - example: https://github.com/jatanassian/flex-september-2024/tree/main/breakout_tech-interview

## VSCode Shortcuts
  https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf

## Git Shortcuts
  https://education.github.com/git-cheat-sheet-education.pdf

## Git Cloning and Commiting
  - Go to directory
  - ```git init``` to create new git repository
  - Make sure git is initalized (be careful for nested Git Repositories)
  - ```git clone <SSH URL>``` always use SSH
  - ```git status```
  - ```git add <file name>```
  - ```git commit -m "Commit Message"```
  - ```git push```
  - Double check branches and origin

  ### For Lighthouse Labs Testing
 - Git clone
  - Go to directory
  - Get token from Compass
  - ```npm run start-exam [exam token]```

## Markdown shortcuts
 https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

## Javascript Cheatsheet
 https://htmlcheatsheet.com/js/

## Vim CheatSheet
 http://www.viemu.com/vi-vim-cheat-sheet.gif

## HTML Cheatsheet
 https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf

## Crow foot notation cheet sheet
  https://www.vivekmchawla.com/erd-crows-foot-relationship-symbols-cheat-sheet/ 


## Variables
  - var - function scoped or globally scoped
  - let - block scoped (inside loop or conditionals)
  - const - block scoped

## Terms
  ### Node.js
    - Javascript runtime built on CHrome's V8 Javascript engine
    - Core API provides EventEmitter class that is the basis for event driven patterns

  ### Scoping
   - Scoping: How variables are organized and accessed
   - Scope: space or environment in where a variable is declared
   - Lexical scoping: controlled by placement of functions and blocks in the code
    - Global - variable declared outside any function or block. Accessible anywhere
    - Function - variables declared within a function are scoped to that function. Accessible only within function (local scope)
    - Block - variable confined to the block {} in which they are declared such as within 'it' or 'for'. Accessible within block
      - let and const block scoped
      - functions are blocked scoped when in strict mode

  - ```var``` : block scopes dont apply. function scoped
  - Scope chain (order in which functions are written in the code) VS Call stack (order in which functions are called)
    - scope chain has nothing to do with order in which functions are called
    - scope chain is a one way street. a scope will never have access to variables of an inner scope (can only look up not down)

  - You can have repeated variable names if they are not in the same scope
  - can have different functions with same parameter names



## Dot Notation and Bracket Notation
  - 2 ways to access or modify the properties of objects
  - Dot notation:
    - access or set properties on object
  - Bracket Notation:
    -  can use any string, character, or number as property names
    - 


### Hoisting
  - move variable and function declarations to the top of their scope during compile phase
    - Variable accessible/usable in code before declared
  - Temporal dead zone (TDZ):
    - time between the beginning of a block of scope (function OR let/const declaration) and actual declaration of the variable within that block
    - let and const: initial value: uninitialized
    - function expression and arrows: let or const, not useable before declared (TDZ)
    - never use arrow function with a method

## ```this``` variable
  - special variable created for every function
  - takes the value of the owner of the function
  - points to the owner of the function
  - method - has ```this``` property
  - simple function call (undefined)
    - strict mode can use
  - arrow functions: dont have own ```this``` keyword (parent function)
  - ```this``` does not point to the function itself

## Strict Mode
  - to enable: at top of page write ```"use strict"```
  - eliminates silent errors (assign a value to undeclared variable with throw error)
  - disallows duplicate Parameters
  - prevents ```this``` from defaulting
  - disallows certain syntax (reserved words)
  - throws error for invalid useage
  - no ```with``` statements

## Pseudocode 
```js    
Loop from 100 to 200:
  Let num = the current step in the loop
  If num % 3 is equal to 0 and num % 4 is equal to 0:
    Print "LoopyLighthouse"
  Else if num % 3 is equal to 0:
    Print "Loopy"
  Else if num % 4 is equal to 0:
    Print "Lighthouse"
  Otherwise
    Print num
  End if
End loop
```

 # How we write a function
```js  
  function myFunction(a, b, c) {
    return a + b + c; }
```

# Object Iteration
 - Properties rea Key-Value pairs associated with an Object
```js
const person = {
  name: 'Alice',
  age: 30,
  isStudent: false
};
Object Constructor:

javascript
Copy code
const person = new Object();
person.name = 'Alice';
person.age = 30;
person.isStudent = false;
```
 * ### For Loop C-Style
  - To iterate over the objects in an array
```js
  function printArrayElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Example usage:
const exampleArray = [1, 2, 3, 4, 5];
printArrayElements(exampleArray); 
```


  * ## For...in
  - OBJECTS
  - Iterates over keys (property names)
  - Iterates through ARRAYS AND OBJECTS
  - Loop through keys of object (indexes)
  - Use when you need to access property keys
```js  
const person = {
    name: 'Alice',
    age: 25,
    city: 'New York'
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
```
```js
const dog = {
  faveToy: 'squeaky ball',
  breed: 'labrador',
  name: 'dioji',
};

for (const key in dog) {
  console.log('value', dog[key]);
}
```

 * ## For...of
  - ARRAYS
  - Iterates over values
  - Iterates through: arrays, strings, maps, sets. NOT OBJECTS
  - Use when you want to iterate over values of an ARRAY
    - if object is not iterable (plain object) ```TypeError```
  - Returns VALUES not keys
```js
const greeting = 'Hello';

for (const char of greeting) {
    console.log(char);
}
```
  - Output: 
```js
H
e
l
l
o
```

 * ### forEach
  - Execute provided function once for each element in the array
  - Can iterate over elements without needining to manage the loop counter
```js
array.forEach(callback(currentValue, index, array) {
    // Code to execute for each element
});
```

  - ```Infinity``` is highest number in JS
  - ```!``` Logical NOT operator
    - Inverts truthiness of a value


# Array Methods
  * ```.push()``` adds new element to end of array and returns new length of array
```js
let arr = [1, 2, 3];
arr.push(4); // arr is now [1, 2, 3, 4]
```
  * ```.pop()``` removes last element from array and returns that element
```js
let arr = [1, 2, 3];
let lastElement = arr.pop(); // lastElement is 3, arr is now [1, 2]
```
  * ```.shift()``` removes first element from array and returns that element
```js
let arr = [1, 2, 3];
let firstElement = arr.shift(); // firstElement is 1, arr is now [2, 3]
```
  * ```.unshift()``` adds element to begining of array and returns new length of array
```js
let arr = [2, 3];
arr.unshift(1); // arr is now [1, 2, 3]
```
  * ```.splice()``` remove or replace element and add new element in its place
```js
let arr = [1, 2, 3, 4];
arr.splice(1, 2, 'a', 'b'); // arr is now [1, 'a', 'b', 4]
```
  * ```.forEach``` executes provided function once for each element in array
```js
let arr = [1, 2, 3];
arr.forEach((num) => {
    console.log(num); // prints 1, 2, 3
});
```
  * ```.map()``` creates new array with results of calling a function on every element in the calling array
```js
let arr = [1, 2, 3];
let doubled = arr.map(num => num * 2); // doubled is [2, 4, 6]
```
  * ```.filter()``` creates new array with all elements that pass the test implemented by provided function
```js
let arr = [1, 2, 3, 4];
let evens = arr.filter(num => num % 2 === 0); // evens is [2, 4]
```
  * ```.reduce()``` reduce array to a single value. results in a single output value
    - Example: the sum of the elements of an array
    - Reduces an array to primitives
```js    
  let arr = [1, 2, 3];
  let sum = arr.reduce((acc, num) => acc + num, 0); // sum is 
```

  * ```.find()``` returns value of first element of array that satisfies test function
```js
let arr = [1, 2, 3];
let found = arr.find(num => num > 1); // found is 2
```
  * ```.included()``` check if array has a certain value. Returns true or false
```js
let arr = [1, 2, 3];
let hasTwo = arr.includes(2); // hasTwo is true
```
  * ```.sort()``` sorts elements of array. Returns sorted array
    - Very useful
    - modified original array and returns reference to same array
    - uses lexigraphical sorting
    - Sorts in asccending order
    - Can use this to find the Range
    - Single digits will sort correctly, big digits will not -lexigraphical sorting
    - deceding order use ```array.reverse```
    - Accepts function reference
      - Sorted based on relationship between each pair of elements a and b
      - <0, >0, or 0
    
```js
let arr = [3, 1, 2];
arr.sort(); // arr is now [1, 2, 3]

```
```js
    let numbers = [4, 2, 5, 1, 3];

// Sort in ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Sort in descending order
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [5, 4, 3, 2, 1]
```

  * ```.join()``` joins element of array intro a string, separated by specified operator
```js
let arr = ['Hello', 'World'];
let str = arr.join(' '); // str is "Hello World"
```
  * ```.reverse()``` reverses elements of array
```js
let arr = [1, 2, 3];
arr.reverse(); // arr is now [3, 2, 1]
```



### Function for Sum of 2 numbers with assertion test
```js
// FUNCTION IMPLEMENTATION
const sum = function (a, b) {
  return a + b;
};

// TEST CODE
console.assert(sum(1, 2) === 3);
console.assert(sum(1, 20) === 3); // bad / incorrect assertion, and we see it fail!
```

* 
* ParseINT - turns string to number
* ParseFloat - for decimals

* Console.assert
  - Static method write an error message to the console if assertion is false. If true nothing happens

* Split
  - ```.split(/\s+/)``` divides string into an array, where each element corresponds to a part of the string that was separated by whitespace.
  - Example:
```js
  
    const trimmedName = "John Doe Smith";
const nameParts = trimmedName.split(/\s+/);
console.log(nameParts); // ["John", "Doe", "Smith"]

```


# Callbacks
  - A function we pass to another function as arguments
```js  
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

## Data types
  - Primitive: String, number, boolean, undefined, null, symbol, (bigInt)
  - 7 Fundamental types of Javascript: 6 above plus Objects
  - Reference: Objects, Arrays, Functions
  - Data Types are Primitives OR objects
  - Dot syntax works on nested objects
  - function that doesnt have a return: it will be undefined
  - Primitive types dont have properties
  - Primitive types have corresponding Objects
  - Objects are called REFERENCE TYPES
  - primitives stored in call stack
  - variables hold memory address
  - objects stored in heap
  - const is immutable: only true for primitive values but not reference values

## Objects
  - Key/value pairs
  - The key in an object is always a string
  - In arrays, use index to access a value
  - Use key to access value
  - Array is type of object
  - Object is like a table with 2 columns
  - Object is a bundle of information known as ```state```
  - When property's value is a function, it is called a method
  - Behaviour: what the method does
  - ```this``` refers to the object that the method was called on

```js
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
  - Reference other properties in an object by using 'this'
  - ```this``` works within context of object
  - ```this``` DOES NOT work with arrow functions
    - reference to the oject where ```this``` is used
```js
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
```js
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
```js
const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
  // we can use the key to access the value
  const value = obj[key];
}
```

* ## Object Oriented Programming
  - Programming paradigm where we use objects to encapsulate data and behaviour
    - these are properties of the object
    - we do this to reduce duplicated code and to break up code into sensibly divided -
    - OOP by itsself does not require the use of classes
  - A class is a blueprint from which instances of objects can be created
  - Classes have data in the form of calue properties and behaviour in the form of methods
  - classes can inherit behaviour from other classes using the ```extends``` keyword
  - Subclasses can override methods that are inherited in their superclass
  - Javascript gives us ```get``` and ```set``` keywords to define methods that are data getters and setters 
  - OOP software development paradigm
  - popular way to solve code organization, re-use and modularity
  - Javascript is not strictly OO in the way that Java or Ruby are
  - Functional programming is an alternative paradigm
  - classes are most popular way to perform OO
    - Javascripts object system is based on ```prototypes``` not classes
    - Classes added in ES6
  - In OOP classes are templates that we use to create instances of objects
    - A class describes what the object is going to be and we can create new objects using the class
  - To declare a new class use the ```class``` keyword
    - To create a new object from a class use the ```new``` keyword
  - ```constructor``` special kind of method for setting default values for any new objects properties
  - Class pattern allows us to DRY up code by defining the default state and behaviours in one place
  - Classes promote code modularity
    - define a blueprint once and create multiple instances from it
    - each instance inherits properties and methods from the class
      - reduces redundancy
    - Instead of deining multiple object literals with same methods and properties, a class is defined once, and instances created from the class will all share the same method implementation but can maintain different states.
    - The encapsulation of related data and behaviours within a class structure promotes modularity and makes code cleaner and easier to maintain ***
    - OO bundles together state and logic into an object that can be represented into a single variable 
  - Getters: method that retrieves a property value
```js
  const person = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.fullName); // Output: "John Doe"

```
  - Setters: allows you to set a property value
```js
const person = {
    firstName: 'John',
    lastName: 'Doe',
    set fullName(name) {
        const parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Jane Smith';
console.log(person.firstName); // Output: "Jane"
console.log(person.lastName);  // Output: "Smith"
```
- Full example:
```js
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        const parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

const person = new Person('John', 'Doe');
console.log(person.fullName); // Output: "John Doe"
person.fullName = 'Jane Smith';
console.log(person.firstName); // Output: "Jane"
```
  - public vs private setters
  - add information about super keyword
  - Dependency Injection: passing an object the things  it needs rather than having the object access them itself. makes code more modular and testable
  - Single Responsibility Principle - change in one part wont affect other unrelated parts of our app

* ## Inheritance
  - Duplication problem
    - Two classes that share the same behaviour and state information
  - Inheritance: build a new class based on an existing class
    - Remove duplicatoin by moving shared code from two classes into another class
  - ```extends``` superclass vs subclass






* ## Data Structures
* ## Dot Syntax
* ## fs readfile


* ## Function
    Implement a function with example

* ## Arrow Functions
  - Concise way to write functions
  - Annymous by nature
```js
 const add = (a, b) => {
    return a + b;
};
```
```js
const add = (a, b) => a + b; // Implicit return

```
```js
const square = x => x * x; // No parentheses needed for single parameter
```
  - No binding of ```this```
    - Arrow functions dont have their own binding of ```this```
    - Useful for callbacks
```js
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
  - Enclosed with backticks ```(`)```
  - Can have multi-line strings
  - String interpolation - dynamic strings
  - Tagged templates

* # Recursion
  - Technique where a function calls itself in order to solve a problem
  - Key components:
    - Base Case: Condition that stops recursion. Without this, function calls itself indefinitely leading to stack overflow
    - Recursive Case: The function calls itsself with modified arguments that bring it closer to the base case 
```js
function factorial(n) {
  // Base case: factorial of 0 is 1
  if (n === 0) {
    return 1;
  }
  // Recursive case: n! = n * (n - 1)!
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```
  - Tail Recursion:
    - Recursive call is the last operation in the function
    - Javascript does not have built in tail call optimization

* ## Command Line Arguments
  - Accessible via the ```process``` object: ```process.argv```
  - Allow you to pass information to your Node.js scripts
  - ```.slice``` to take out parts of the array into a new object array
  - Example:
 ```js 
  const args = process.argv.slice(2); //slice out first 2 command line arguments
const sum = function(numbers) { //create function called sum
  let total = 0;
  for (let i = 0; i < numbers.length; i++) { //loop through array
    total += Number(numbers[i]); // turn string to number
  }
  return total;
};
console.log("Sum: ", sum(args));
```
- Example 2, Tail: use slice to return everything exept first item (head) of array
```js
const tail = function(array) {
  return array.slice(1);
};
```


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


# TDD Test Driven Development

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

```js
// Example of a simple function
function largestNumber(array) {
  return array.reduce((previousValue, currentValue) => {  
    return Math.max(previousValue, currentValue);
  });
}

```
```js
// Example of a test for that function
const array = [1,2,3,4,5];
const largest = largestNumber(array);
assert.equal(largest, 5);

```
-  ### Mocha and Chai 
    - Packages to write automated tests
    - To install ```npm install mocha chai --save-dev``` saves as dev dependecies
    - replace ```test``` with 'mocha' in JSON
    - to run ```npm run test```

-  Mocha
    - Testing framework. Looks in ```test``` folder for files to run
    - ```module.exports``` and ```require```
    - Use ```.gitignore``` to ignore sensitive files
    - In JS file add
    - In test file use require
```js      
      const assert = require('chai').assert;
      const app = require('../app');
```
    
  - describe/it statement in test file
      describe('App', function() {
        it('app should return hello', function () {
          assert.equal(app(), 'hello');
        });
      });
    

  - Chai
    - Assertion library
    - describe desired output of code
    - ```should``` ```it``` and ```assert```
    - 



  - BDD: Behavior Driven Development 
    - Write test to check behaviour of code
   - Mocha Instructions
      - Initialize a project as a num package
      - ```npm init -y``` 
      - not in test folder
       - Add test framework eg. 'mocha' to scripts
       - update scripts
       


* # Asynchronus Control Flow
  - ## Callbacks
    - Functions passed as arguments to be executed once an operation completes
    - Code modularity
```js
const forEach = (array, action) => {
  for (const element of array) {
    action(element)
  }
}

const logThatElement = (element) => console.log(element);

const logThatElementButFancy = (element) => console.log("🔥🔥" + element)

const someArray = [1, 2, 3, 4, 5]

forEach(someArray, logThatElement)

```


```js    
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});

```



- # Promises
A promise represents the eventual result of an asynchronous operation. The primary way of interaction with a promise is through its then method, which registers callbacks to receive either a promise’s eventual value or the reason why the promise cannot be fulfilled.

A promise is an object
Promises do not rely on anything other than basic JavaScript
As of ES6, JavaScript has promises supported natively in its code. In other words, they are built into the language (via Promise)

There's more to promises than just avoiding nested callbacks, such as:

Error handling becomes much simpler with promises
Promises make asynchronous code easier to unit test
Promise.all (introduced by MPJ's video) can be used to run multiple async operations in parallel and have a single callback to see all the results together

- There are four stages in creating Promises:

  - Wrapping (syntax, or the Promise structure)

  - Thening (when it works)

  - Catching (recovery, when there's an error)

  - Chaining (where you create long sequences of asynchronous work)

- Four states of a Promise:

  1. Fulfilled (it worked!)

  2.  Rejected (failed)

  3.  Pending (still waiting...)

  4.  Settled (something happened)

##

- Objects that represent the eventual completion (or failure) of an asynchronus operation
- Handles Asynchronus operations
- Common use is when we want to run network requests to fetch data from APIs
- Three states:
  - Pending: initial state
  - Fulfilled: operation completed successfully, promise has a resulting value
  - Rejected: operation failed. Promise has reason for failure (error)
- Promise needs two callback functions, one for success (resolve) and one for failure (reject).
```js
let myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  let success = true; // Example condition

  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});
```
  
- Handle result of promise using ```.then()``` and ```.catch()```
```js
myPromise
  .then(result => {
    console.log(result); // "Operation was successful!"
  })
  .catch(error => {
    console.log(error); // "Operation failed."
  });
```
- Chaining Promises
```js
myPromise
  .then(result => {
    console.log(result);
    return new Promise((resolve) => resolve("Next step!"));
  })
  .then(nextResult => {
    console.log(nextResult); // "Next step!"
  })
  .catch(error => {
    console.log(error);
  });
```
- Promise.all: multiple promises in parallel

```js
Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log(results); // Array of results
  })
  .catch(error => {
    console.log(error); // If any promise is rejected
  });

```
- ```Promise.finally```: execute block of code after a promise has settled, regardless of whether it was fulfilled or rejected. The code inside ```.finally()``` will run no matter what

```js
let myPromise = new Promise((resolve, reject) => {
  let success = true; // Change this to false to test rejection

  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});

myPromise
  .then(result => {
    console.log(result); // This runs if the promise is fulfilled
  })
  .catch(error => {
    console.log(error); // This runs if the promise is rejected
  })
  .finally(() => {
    console.log("Cleanup actions or final steps."); // This always runs
  });

```
- ```Promise.all```: takes an array of promises and returns single promise that resolves when all of the promises in the array have resolved or array is empty
  - if any promises reject, ```promise.all``` immediately rejects with the reason of the first promise is rejected

```js
let promise1 = Promise.resolve(3);
let promise2 = 42; // Non-promise values are treated as resolved promises
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values); // [3, 42, 'foo']
  })
  .catch(error => {
    console.error(error);
  });

```

- ```Promise.any```: method that takes an iterable of Promise objects and returns single promise that resolves as soon as any of the other promises fulfills
  - if not promises fulfill, returned promise is rejected with ```AggregateError``` (built in error type)

```js
let promise1 = Promise.reject('Error in promise1');
let promise2 = Promise.reject('Error in promise2');
let promise3 = new Promise((resolve) => {
  setTimeout(resolve, 100, 'Success from promise3');
});

Promise.any([promise1, promise2, promise3])
  .then(value => {
    console.log(value); // "Success from promise3"
  })
  .catch(error => {
    console.error(error);
  });
```


- Use ```.then .catch .finally```
- Explain .all .any .allsettled .race


```js
const boilWater = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      return resolve();
    }
    return reject("Oven Broke");
  });
};

// boilWater()
//   .then(() => console.log("water is boiling!"))
//   .catch(() => console.log("The oven broke"));

const putThePastaInWater = () => {
  return new Promise ((resolve, reject) => {
    if (Math.random() > 0.5) {
      return resolve();
    }
    return reject("Pasta fell on floor");
  });
};

boilWater()
  .then(() => putThePastaInWater())
  .then(() => console.log("Pasta boiling was success"))
  .catch((error) => console.log(error));
```


```js
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
```js
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
```js
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


## Async control flow libraries
- Libraries like ```async.js``` can provide additional control flow patterns like series, parallel, and waterfall for managing complex asynchronus workflows

## Transposition:
  - Rearrange arrays
  - Eg: transform rows into columns in a matrix
  - 2D array (matrix) transposition would be converting rows to columns
    - Rows become columns. Columns become rows
  - Example: Transpose 2D matrix
    - Initalize empty array
    - Loop over each column
    - Loop over each row
    - Transpose: 
      - Initalize empty array for each column in original matrix
      - Fill array with elements from original matrix 

## Networking and TCP
- Two or more computers communicate with each other
- Transmission Control Protocol
- MAC address: name
  - 48 bits, 6 bytes long
- IP address: telephone number

## HTTP
- URL: Uniform Resource Locator
  - URL has: 
  - Protocol
  - Domain (or Host)
  - Port
  - Resource Path
  - Query Parameters
  - Anchor
- 9 HTTP request methods, but we only need to consider 4
  - ```get```: used to get data from the server
  - ```post```: used to create new data
  - ```put```: used for editing existing data on the server
  - ```delete```: used to delete existing data
- Status Codes:
  - 200: Everything went great
  - 201: Request succeeded and new resource has been created as result
  - 404: Resource not found
  - 500: The server had an error
  - 451: Resource not available due to legal reasons
- HTTP is request-response protocol where client makes requests and server sends responses
- HTTP is a text based protocol
- HTTP requests must contain verb/method(```get```) and the Path ```/about```
- HTTP requests arent always to recieve data but sometimes to save data, done via a ```post``` instead of a ```get```
- requests and responses both contrain key-value based headers
- URL: Server uses path to determine which resource to access. Parameters add additional information about what the client is interested in
- UDP: User Datagram Protocol
  - Smaller header size (8 bytes) which results in smaller packet sizes
  - Connectionless ie. there is no need to establish or maintain a connection
  - No error recovery (any corrupted packets are discarded)
  - Packets can arrive in any order
  - Useful for streaming/low latency applications
  - Example: Twitch
- TCP: Transmission Control Protocol
  - Larger header size (20 bytes)
  - Requires a connection (3-way handshake)
  - Corrupted packets are reported to the server and are re-sent
  - Packets arrive in order
  - Useful when guaranteed communication is needed
  - reliable, safe. will resend if packages are missing
- HTTP:
- Needle:
- JSON: a subset of JavaScript that allows string-representation of objects 
  - A way to convert objects into text
  - requires quotes around keys
  - Built on two structures
  - a collection of name/value pairs
  - an ordered list of values
  - Serialization: converts objects (or data structures) into a format that can be transmitted between computers (Object --> string)
    - The opposite (string --> Object) is called deserialization
  - ```JSON.parse()``` parse a string as JSON and return value
    - optionally transform the produced value and its properties
  - ```JSON.stringify()``` return JSON string of the value
  - JSON is language independent
- CRUD
  - Create: ```post```
  - Read: ```get```
  - Update: ```put```
  - Delete: ```delete```
  - when we send a safe request to read some information (safe as in a request that should have no side effects on the server), we should use the ```GET``` method. When we send a request to create a resource we should use POST. When we update a resource in an idempotent way we should use ```PUT```, otherwise when updating in a non-idempotent way we should use ```POST```. If we are requesting to delete a resource, we should use ```DELETE```.
  - Instead of PUT and DELETE, we will use POST.
  - app.listen to start

  - using nodemon, ejs and express for projects
  - separate html
  - ejs (views folder) - .ejs file (html templating) -- render the template res.render
  - body parser middlewear
  - morgan middlewear
  - view engine .set (ejs)
  - middlewear .use (morgan body parser)

## APIs Application Programming Interface
  - Allows systems to work together
  - Sets of requirements that govern how one applicatoin can talk to another
  - lets apps 'piggyback' on their offerings
  - REST API: Representational State Transfer
    - call from client to server and you get data back
  
## HTML
  - <link> used to attach a stylesheet
  - <div> generic division element container for flow content
  - <ol> for ordered list
  - <font> not valid in HTML5 - use CSS

## CSS Cascading Style Sheets
  ```html- Inline <p style=""> 
  - internal (within head) <style></style> 
  - external - new file (style.css)
    - <link rel="stylesheet" href="style.css">
    - add id and class to <p>
```

## Webservers
  - create server
 - Express: routing and middlewear framework for building web servers. put express documentation link
 - request response
 - .get (order matters) .send
 - res.send
 - params: allows us to interchange information inside of URL. (req.params)
  - no limiti to how many params we have 
 - handle dynamic paths by setting up an object
  - reference object to retrieve information
  - dynamic routing
- EJS javascript into html
  - set view engine
  - app.set("view engine", 'ejs')
  - make new folder called 'views'
  - extension: .ejs
  - res.render
- middlewear: most helpful is MORGAN(put in dev mode) - good for debugging 
-Post data params req .params.id
qwury string params

## Security and HTTP
  - Encryption vs Hashing:
    - 
  - dont store passwords as plain text - hash
  - cookies - use key and encrypt
  - dont use http use https so there is no man in the middle

  - bcrypt.js to hash passwords (npm i bcrypt) (npm i bcyptjs)
  - import bcrypt at top
  - function to save plain text password to database
   - before you save password to database: hash the password before save
    - const hashedPassword = 
    - use a salt to pass
    - salt: value provided to hashing function that will ensure different hash every time

benefit of hashing: one way process. cant get it back vs encrptying password
hashSync then compareSync
compareSync test string against hash

cookie parser saves cookies as plain text files - not good
protect login and logout routes with cookies 
encrypt cookies with 3rd party library (npm i cookie-session)

dont need cookie parser in project (tinyapp) should take it out says sandeep

to start using cookie session: app.use (middlewear) call cookie session
import cookie session object
use it
give it name
and keys
to set: req.session.email 
clear cookie: set to null
grab from req.session object
clear encrypted cookie

bcrypt - require it from bcrryptjs

to make sure targets are always encrypted tarket route: / register req should be hashed
when you save password: you should hash it
method to hash: hashsync ------bcrypt.hashsync(password, salt)
generate salt in global scope
create variable salt const salt = genSaltSync()
use hashedPassword instead of real password
before saving passwords we are hashing them
problem: old passwords still saved as plain text

compareSync - compare plainstring password to hashed value

### REST API (Restful API conventions)
  - representational state transfer
  - set of conventions, to ensure conventions are same between projects and developers
  - use http verbs to express what the request wants to accomplish
  - advantages: be able to explain this
  representation: represent information as JSON, XML, HTML
  cookie to keep track of which user
  server doesnt keep track
  stateless architecture
  transfer: transfer of information

  what happens if you dont follow REST conventions:
  
  7 http verbs
  - set of conventions that deals with accessing and manipulating resources over HTTP
  - GitHub API is RESTful, can be used to manage resources which can be accessed using an API endpoint (URL)
  - BREAD: Browse, Read, Edit, Add, Delete
  - A resource in REST is an abstraction for a document or image, or temporal service

## Stack
  - Collection of technologies used in a given system
  - Project we work on has stack
    - Web server: Node.js
    - Middleware: Express
    - Template Engine EJS
    - Database: none, just an in memory object
    - could also include: Hoisting/Infrastructure: Railway.app
  - Full stack: back end and front end
    - back end: server side technologies like web servers (Node.js), databases
    - front end: what a user sees and interacts with such as html/css/javascript and everything on client side (in the browser)

## CSS Cascading Style Sheet
  - specifies a pages appearance
  - Made of static rules: each rule takes selectors and gives specific values to a number of visual properties
    - properties applied to page elements indicated by SELECTOR
  - Precedence or Cascade
    - rules with more specific selector take precedence over a less specific one
    - a rule occurring later in the stylesheet overwrites a previous one
    - Precedence is for each property, not the entire block
  - Precedence Rules:
    - E Highest
    - F inline style
    - A: 3 specifiers: name of the element (p), its class (class1), and attribute (attr='value')
    - C: same specificity as B but appears after
    - B
    - D
    - ID has highest priority
    - inline style overwrites any styles in external stylesheets
    - !important overrides other declarations and is bad practice
    - Hex code colors: example: #FF0000 is red
    - ```ID``` used to identify unique elements on page
    - ```class```es are used to identify elements of the same type
    - element can only have 1 id but many classes
    - Classes imply stylistic or behavioural properties about an element
    - classes should be used more than ID
    - ID used when you have a unique element that behaves differently
      - also used when you need to reference them from the URL
      - IDs can work faster when targeting elements by ID
      - ID is unique identifier only used once on page
    - Use neither classes nor ID unless necessary
    - class identifier of element and can be used multiple times per day
  - FlexBox: layout module to adapt to different screen sizes and displays
    - ```diplay: flex``` add to parent property
      - also referred to as container element
      - flex direction defines direction
      - Child properties:
```js
  Given the CSS selectors below, which one would have the highest specificity and why?

p {
  color: green;
}

.text-primary {
  color: blue;
}

#header p {
  color: red;
}
```
  Specificity Calculation:
  Selector: p

  It targets all ```<p>``` elements.
  Specificity: (0, 0, 1, 0)
  0 ID selectors
  0 class selectors
  1 type (element) selector (p)
  0 inline styles

  Selector: ```.text-primary```:
    - It targets any element with the class text-primary.
    Specificity: (0, 1, 0, 0)
    0 ID selectors
    1 class selector (.text-primary)
    0 type (element) selectors
    0 inline styles

  Selector: ```#header p```:
  It targets all ```<p>``` elements inside an element with the ID header.
  Specificity: (1, 0, 1, 0)
  1 ID selector (#header)
  0 class selectors
  1 type (element) selector (p)
  0 inline styles
  Highest Specificity:
  #header p has a specificity score of (1, 0, 1, 0), which is the highest among the three selectors.
  The reasoning behind this is that it contains an ID selector (#header), which has the highest weight in specificity. It also has one type (element) selector (p).

  - Box Model:
    - How elements are displayed and sized on a webpage
    - Content:
    - Padding:
    - Border:
    - Margin:
    - Order surrounding HTML: padding, border, margin

## Semantic HTML
  - helpful structured HTML
  - non semantic not helpful structure
  - ```<article>``` splits page up into different sections
  - ```<section>```

## Normalize.css
  - Can use necolas in midterm project. renders page across different browsers
  - normalize.css
  - 

# DOM - Document Object Model
  - DOM Events occur on a web page as a user moves their mouse, clicks, double-clicks, scrolls, presses a key, releases a key, etc
  - Event driven architecture
    - when x happens do y
    - x is event. y is event handler
    - x is click of button. handler y turns on lightbulb
    - server running node.js: incoming request event. callback function handles the event(and could give response)
  - DevTools
  - Javascript manipulates the DOM


  - BOM: window screen document
  - DOM organized in a tree (DOM elements nested within other elements)
    - client side
    - events like onClick, onFocus, onLoad
    - Events that affect child element bubble up through its parents
      - event propogation
      - stop event propogation with stopPropogation()
    - BUBBLING
      - most events bubble (focus does not)
      - to stop mutliple alerts while maintaining button functionality by using event.stopPropogation() method

```js
button.onclick = function(event) {
  event.stopPropogation();
};
```
  - ensures that after the button's specific actions are executed, the event does not travel up the DOM tree and trigger any parent handlers. This effectively prevents multiple alerts due to event bubbling
  - when an element is clicked CAPTURING happens first then BUBBLING
  - When you set event it is handled during bubbling phase
  - event.stopPropogation() stops an event from triggering subsequent handleres

  - DOM traversal if you have parent grab the child
    
  - DOM event Object:
    - contains properties that provide detials about the event
    - basic, mouse, keyboard, focus, touch, event, event handling,
    -  isTrusted, altKey, bubbles, button, buttons, cancelBubble, cancelable, clientX, clientY, composed, ctrlKey, currentTarget, defaultPrevented, detail, eventPhase, fromElement, layerX, layerY, metaKey, movementX, movementY, offsetX, offsetY, pageX, pageY, relatedTarget, returnValue, screenX, screenY, shiftKey, sourceCapabilities, srcElement, target, timeStamp, toElement, type, view, which, x, y.
  - ```keypress``` event triggered only for characters
    - event is fired when a key that produces a printable character is pressed down
  - ```keydown``` shift is example. not a character producing key
    - event is fired when ANY/ALL key is pressed. event is fired before the character is actually inserted
  - Example: capitol leter 'A' (hold down shift then press a)
    - keydown: first shift triggers keydown and then will trigger its own keydown event
    - keypress: after a is pressed, the keypress event will first because a is character producing
    - keyup: finally when keys are released keyup event triggered in the reverse order
  - Webform action: specifies endpoint where the form makes a submission request
  - login form is typically post
  - search form submission typically use get
  - cancel button to go back: use ```<a>``` element
  - URL encoded is the default content type for web form submissions

## JQUERY 
  - library to demonstrate client side events
  - helps with dom manipulation
  - concise - cleaner API
    - wraps native functions with cleaner API
  - animations
  - cross browser support - fixes browser compatibility issues
    - $(window).width()
  - EVENTS in JQUERY
    - listen for events
  - JQUERY helper function is simplified and easier to use
    - $(window).width() abstracts the differences in how browsers implement features
    - consistent and reliable way to get information like the viewport width across all browsers

## AJAX 
  - Asynchronous JavaScript and XML
  - passed to a JavaScript function
  - JavaScript will modify the DOM to reflect the response from the server
  - use a JavaScript function to make an HTTP request to the server for the latest weather data. This function could be triggered to run every minute using setInterval(). Once the data is received, another JavaScript function would update the DOM with the new weather data, thus refreshing the displayed information without needing to reload the entire page.
  - improving user experience by keeping the page responsive, increasing efficiency by only requesting and updating necessary data, and reducing server load since the entire page isn't being reloaded.

- AJAX LECTURE
  - Server side rendering: EJS (tinyApp)
    - data, fetches all done via server
  - Client side rendering: Tweeter
    - client being the users device (smartphone, computer)
  - server side rendering - another computer 
  - old reddit vs new reddit example (uses ajax call)
    - allows for async calls for information
    - content on page doesnt change
  - downsides to csr/ajax: all relies on users machine
  - ssr everyone has same experience
  - fetch uses ajax (ISS project)
  - vanilla version: XMLHTTPRequest -> XHR
    - now we are using fetch to make async calls
  - use fetch to get info from API (takes 1 argument)
    - its a promise so you can use .then()
    - parse JSON
  - API usually replies in JSON
  - document.querySelector
  - addEventListener
  - document.addEventListener('DOM content loaded')
  - $(document).ready (AJAX) is the same thing nad less to type
    - write functions inside
  - can disable button after fetch has been made
    - searchButton.disabled = true
    - talked about nodes and parents ```<h2>``` if you put text in middle it is considered child and h2 will be parent. created a node 
    - can redo everything with JQUERY
    - import CDN
      - JQUERY second one on cdn not min (it doesnt have ajax)
      - class '.'
      - id '#'\
  - create element in list ```$(`<li>`)```
  - fetch(vanilla) api vs ajax call(JQUERY)
    - get and post
    - only key that is needed for ajax request is URL
      - dont have to parse with JQUERY
    - other 2 keys are success and error (dont need .then()) - error is like .catch()
      - incorporate everything into success key
    - JQUERY.ajax (also axios that i can learn later on)
    - shorthand AJAX
      - ```$.get(URL)``` or .post
        - takes .then() because it is a promise
    - by default forms refresh page - use preventDefualt ( at the begining of form)

    - ajax post
    - form request to server different than ajax form
    - CORS cross scripting policy
      - servers have this by default
      - enable CORS - require cors
        - so you can take requests
        - cors is only private serer

    - for tweeter get request at top of document.ready
    - 2 get requests in Bryans to do example one at top one later on
    - to delete something use app.post (lighthouse labs)
    - axios has delete


## Javscript in HTML
  - if at the end of the body will load the rest of the page first
  - if you put it at the top it will block rest of the page 
  - link to script in head ```<script src="></script>```
  - HTML that you write is parsed by the browser and turned into the DOM
- To do list 
    - 

    how do you ensure javascript is running after you load page - put it at the end of the body interview question
    DOM traversal interview question

    $(document).ready(function() {}) - run jquery code inside of this*** very important
    - create jquery element 

## Responsive Design
  - how webpages look across different devices
  - overflow pattern: keep links on one line but truncate the list at edge of screen. swipe horizontally to reveal hidden links, but they arent immidiately visible
    - scales to any device but users might miss links that arent visible
  - progressive disclosure: navigation hidden by default and provide toggle mechanism for users to show and hide content.
    - make sure button is labeled
  - Carousels: common method of hiding away content
    - better at solving organizational problems
    - prevents a page from getting too long and cluttered
    - hybrid approach: show content in carousel for small screens. display some content in a grid for larger screens.
    - for narrow screens display items in a row using flexbox
      - the row of items extends beyond the edge of the screen
        - use ```overflow-x: auto``` to allow horizontal swiping
    - ```scroll-snap``` feature ensures items swipe feels smooth
    - ```scroll-snap-type: inline mandatory``` snaps items into place
    - when the screen is large enough (wider than 50em) switch to grid and display items in rows and columns without hiding anything
  - Disable Viewport: should be on every webpage in the ```<head>``` area
```<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />```
  - easier to expand content then cut
  - viewport is area of browser
  - percentages are relative to parent
  - SASS extension (superset) - make css easier
  - superset is typescript in javascript
  - can create variable names in SASS file

# Algorithms
  - set of instructions for accomplishing a specific task
  - steps you take to accomplish something is an algorithm
  - measure speed of algorithm by counting the number of ELEMENTARY OPERATIONS
    - ex: let number = 0; number += 2; console.log(number)
    - if an algorithm performs n operators we say the running time is n
  - Elementary operations: operation that takes fixed amount of time to perform
  - most are 1 or n
  - i < array.length; // n + 1 

```js
let result = 0; // 1

for (
  let i = 0; // 1
  i < array.length; // n + 1
  i++ // n
) {
  let number = array[i]; // n
  result += number; // n
}

console.log(result); // 1

```
  -  running time of the entire algorithm 3 + (n * 3) + n + 1 which can be simplified to 4 + (n * 4). A more conventional way to write this math expression is 4n + 4.
  - Time complexity is often referred to as running time
  - Algorithms that don't deal with dynamic data, like loops, usually take constant time (no n involved)
  - Algorithms that iterate over data, involve using n based on the size of the data
  - time complexity is linear, or O(n).
- Examples:
  - constant time complexity parts are:
    - let total = 0; This is an elementary operation and takes a fixed amount of time.
    - console.log(total); This is also an elementary operation and takes a fixed amount of time.
  - linear time complexity part:
    - for (let i = 0; i < array.length; i++) { total += array[i]; } This part of the code iterates over the array, and the number of iterations depends on the size of the array (n). Each iteration involves an elementary operation (total += array[i];), making this part of the code linear in time complexity.
  - linear loop depends on n. constants elementary operations
  - i++ and console.log count as n
  - i < array.length is n +1
  - i = 0, counts as 1

```js
// 1. Array initialization: (1 operation)
const array = [1, 2, 3, 4, 5];  // O(1), array initialization

// 2. Variable initialization: (1 operation)
let largest = 0;  // O(1), initializing 'largest' variable

// 3. Loop setup: 
//    - Loop setup and first condition check take 1 operation
//    - The loop runs 'n' times, where 'n' is array.length, and each iteration involves:
for (let i = 0; i < array.length; i++) {  // O(n) - Loop runs n times
  // 4. Inside the loop body (each iteration of the loop):
  
  // 4.1 Array access: (1 operation per iteration)
  const element = array[i];  // O(1), accessing the element at index i
  
  // 4.2 Comparison: (1 operation per iteration)
  if (element > largest) {  // O(1), comparing element with 'largest'
  
    // 4.3 Assignment: (1 operation per iteration, happens only if condition is true)
    largest = element;  // O(1), updating 'largest' value if condition is true
  }
}
// End of loop. 5n + 4 is the answer
```
  - Binary Search: algorithm used to search for something in a set of ordered data
    - halving approach
    - efficient for finding an item from a sorted list of items. repeatedly divides the portion in half
    - most common way: find an item in an array
    - main idea is to keep track of the current range of reasonable guesses
  - Binary search guessing game (english):
    - step-by-step description of using binary search to play the guessing game:
    - Let min = 1  and max = n.
    - Guess the average of max and min, rounded down so that it is an integer.
    - If you guessed the number, stop. You found it!
    - If the guess was too low, set min to be one larger than the guess.
    - If the guess was too high, set max to be one smaller than the guess.
    - Go back to step two.
  - Prime search game Binary search
    - Let min = 0 and max = n-1.
    - Compute guess as the average of max and min, rounded down (so that it is an integer).
    - If array[guess] equals target, then stop. You found it! Return guess.
    - If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
    - Otherwise, the guess was too high. Set max = guess - 1.
    - Go back to step 2.
  - Binary search: in an array of a million would require only about 20 comparisons. linear up to 1 million
  - algorithm input size doubles: time complexity O(log n)

  - Difference between linear and quadratic time

  ```js
  function arrayContainsSum(array, sum) {

  for (
    let i = 0; // 1
    i < array.length; // n + 1
    i++ // n
    ) {
    const element1 = array[i]; // n

    for (
      let ii = 0; // n
      ii < array.length; //n + n^2
      ii++ // n^2
      ) {

      const element2 = array[ii]; // n^2

      if (element1 + element2 === sum) { // n^2
        return true;
      }
    }
  }
  return false; // 1
  }
  // Add all the operations together to get a running time of 3 + 5n + 4n^2
  ```
  - n^2 causes high growth curve. avoid with nested for loops
  ```js
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]); // n
  }
  ```
  - nesting of loops adds many extra operations to an algorithm 
  - linear faster than quadratic

  - Quadratic algorithms have a much slower running time than linear algorithms
    - can be created by nesting loops. common when comparing every item in an array to every other item in that array
  - Separate arrays run in a * b times

## Big O Notation
  - official way to determine efficiency of algorithms
  - written as ```o()``` 
    - describes how the number of steps in algo scales relative to its input
    - does the algo grow linearly, exponentially, or logarithmically?

  - 3 main criteria:
    - only care about arbitrarily large input
      - Big O notation focuses on how an algorithm performs when it's given arbitrarily large input.
    - drop the non dominant terms
      - only care about mentioning the highest order term ```O(n^4)```
    - drop constant terms
      - Big O notation is used to describe how an algorithm's complexity grows relative to its input. It is not used to describe the exact running time of an algorithm.
      - when an algorithm grows lineraly it is said to have O(n) complexity
  - Examples:
    - 2n + 3 will grow linearly, O(n)
    - 100n^2 will grow exponentially, O(n^2)
    - log n + 1000000000 will grow logarithmically, O(log n)

  - More examples:
    - Constant O(1) - always takes the same amount of time ```array[2];``` no matter how big array is ```array[2] + array[3] + array[4];```
    - Linear O(n) - operations grow lineraly relative to its input
      - summing every number in an array is an example
    - Quadratic O(n^2) - operations directly proportional to the square of the size of the input
      - find all duplicates in array, first unique number in array
    - Logarithmic O(log n) - operations directly proportional to the logarithm of the size of the input

  - as the input size n grows larger, constants and non-dominant terms become insignificant. In the expression 1000n + n^2, for instance, the 1000n term becomes negligible compared to n^2 as n increases, so we simplify the complexity to O(n^2). This simplification makes it easier to compare the efficiencies of different algorithms.


## SQL - Structured Query Language
- Relational Database Management Systems (RDBMS)
  - type of management systems (eg PostgreSQL, SQL, Oracle)
  - one database per application
    - one database has many tables
  - PK: primary key: first most important key for any row of a table
  - FK: Foreign Key: values we use to trace our routes between tables
- ERD entity relationship diagram - how tables are connected
  - Entity
  - Attribute
  - Primary Key
  - Relationship
  - Cardinality -crows foot
- Bridge table for ERD
- DDL - data definition language
  - how we create our database
- DML -data manipulation language
- schema: blueprint of what table will look like
- INTEGER
- TEXT/VARCHAR limit is 255
- Serial primary key
- ORDER BY clauses come after WHERE
- The LIMIT clause should be at the end
- SELECT queries start with the SELECT clause
- PostgreSQL: might need to restart everytime computer restarts
  - default PostgreSQL user will be labber with labber as the password
- To start PSQL
  - ```sudo service postgresql start``` peter heyboer lighthouse every time
  - ```psql``` 
  - ```sudo -i -u postgres``` *** this works to login to postresql as super user
  - then run ```psql```
  - switch to bootcampx database ```\c bootcampx```
  - exit postgresql with ```\q```
  - connect right to database ```psql -U peterheyboer -d bootcampx```
  - connect to database as superuse ```psql -U postgres -d bootcampx```
- JOING TABLES
  - INNER JOIN - gives us rows where there is a match between 2 tables
  - OUTER JOIN - times when we do want to include datya where
    - LEFT RIGHT FULL
    - returns all results for one of the tables even when the join condition is not met

- consider a scenario where you have a students table and a projects table. If you want to list all students along with their project names, including students who haven't started any projects yet, a LEFT JOIN would be appropriate. Here's how you might write the SQL query:

## Database Design 
  - state of the system - entire data delt with at the time
    - what are the different pieces of data 
- Data: information stored by a computer
- databse: easy access and manage
- user story: as a user i should be able to log in
  - there are a lot of user stories. scenarios
  - entity
- database: adapt to changing needs over time
- Normalization: normalize data by making another table DRY
- entities tables crows foot is the relationship between
- NOT NULL means there has to be some value cannot be left empty 
- Primary Key - uniquely idenifty record in your database
  - must be unique cannot be null
  - PK and FK must be same data type
- table and field names written in snake_case
- table names pluralized
- refer to PK as ID
- crows foot relationship types
  - one to one - related to one and only one example sin to person name
  - one to many - employee and position, author and books, user and posts
  - many to many - movies and actors example, students and courses
  many - many never represent it as that. break it down into one to many relationships
  - making an ERD - draw.io
  - one tomany : parent and child relationship. authors parents books are child of parent
  - earaser.io is a whiteboard to draw on 
  - cant put FK into 2 tables? - use bridge table
  - many to many use a bridge table - third table (junction/middle table) makes one-to-many relationships
- 1NF: first normal form
  - ensures data is stored in a consistent and structured way
  - in 1nf form if table has atomicity, uniqueness of rows, no repeating groups
  - put relationships in own table
- Foreign Key:
  - field in one table that refers to Primary Key in another table. This is how we model relationships
  - in one to many relationship: FORIEGN KEY IS ON THE MANY SIDE
- Many to many relationships - make into multiple one to many relationships with bridge table (join table)
- SQL commands that we use to define the database schema are Data Definition Language statements (DDL) (CREATE ALTER DROP)
- store a number in PostgreSQL, ten numeric types: SMALLINT, INTEGER, BIGINT, DECIMAL, NUMERIC, REAL, DOUBLE, SMALLSERIAL, SERIAL, BIGSERIAL.
- ```ALTER TABLE```
```
 ALTER TABLE table_name
ADD COLUMN new_column_name data_type constraint;
```

- delete table: DROP TABLE IF EXISTS users CASCADE;
- If the primary key is SERIAL, then the foreign key should be INTEGER.
- Names, emails, usernames and passwords can all be stored as VARCHAR(255). Students to cohorts would be cohort_id. The type would be INTEGER .
- Dates would use the DATE type. If we needed date and time, use TIMESTAMP.
- INSERT INTO
- Delete: DELETE FROM table_name WHERE condition;
  - always include a where clause when deleting 
- Update: UPDATE students
SET name='Callisto Caiazzo', email='ccaiazzo@gmail.com', github='callcazz'
WHERE id = 3;


## SQL to EXPRESS
  - need to know for midterm - refer to lecture
  - client makes request to server. server sends response.
  - server talks to database. database response back to client
  - adding database now. database sends back response via JSON
  - server sends back to client to be displayed in browser
  - request from client to database is possible*
  - steps: login to psql (psql -U development)
  - to add the file use \i
  - PostgreSQL
  - BREAD - browse, read, edit, add, delete
  - npm init -y
  - create new config file
  - default port for postgresql is 5432
  - make query after connection is made
  - console.table to see it in a table 
  - fetchAll vs query
  - fetchAll remove callback
    - can make it so it only returns results. catch errors with .catch
    - fetchAll can export function
  - sanitize querys - parameterized queries (array of values)
  - pool and client connect to database
    - client is a one way connect
    - in the event of many users coming to website and inserting info: use pool
    - more than one connection at a time: use pool
    - const {pool} = pg;
    - client and pool are the exact same
  - 1 file for each table in queries
  - pool and config and pg require in different file (connection.js)
  - .env (add to gitignore)
    - dependency - dotenv
    - hide information so it doesnt get pushed to github
    - process.env. (placeholdesr in connection file for config)


## 



* add part about fs readfile****************