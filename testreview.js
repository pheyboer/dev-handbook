///////////1
function sumOfNumbers(arr) {
  // your code here
  return arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}

console.log(sumOfNumbers([1, 2, 3, 4])); // 10

///////////2

function isEvenOrOdd(num) {
  // your code here
  if (num % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

console.log(isEvenOrOdd(4)); // "Even"
console.log(isEvenOrOdd(7)); // "Odd"

///////////3

function findLargest(arr) {
  // your code here
  return Math.max(...arr);
}

console.log(findLargest([3, 1, 9, 7])); // 9

///////////4

function reverseString(str) {
  // your code here
  return str.split('').reverse().join('');
}

console.log(reverseString('hello')); // "olleh"

///////////5
function countVowels(str) {
  // your code here
  const vowels = 'aeiou';
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels('hello')); // 2 (e, o)
console.log(countVowels('world')); // 1 (o)

////////////6
function fibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]

//////////7
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));

////////////////8
function findIndexOfChar(str, char) {
  // your code here
  return str.indexOf(char);
}

console.log(findIndexOfChar('hello', 'e')); // 1
console.log(findIndexOfChar('hello', 'a')); // -1

///////////9
function arrayIncludes(arr, num) {
  return arr.includes(num);
}
console.log(arrayIncludes([1, 2, 3], 2)); // true
console.log(arrayIncludes([1, 2, 3], 4)); // false

//////////10
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
console.log(isPalindrome('madam')); // true
console.log(isPalindrome('hello')); // false

///////Bonus Simple Calculator

function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return 'Error Dividing by 0';
      }
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}

console.log(calculator(5, 3, '+')); // Output: 8
console.log(calculator(5, 3, '-')); // Output: 2
console.log(calculator(5, 3, '*')); // Output: 15
console.log(calculator(5, 3, '/')); // Output: 1.666...
console.log(calculator(5, 0, '/')); // Output: Error: Division by zero
console.log(calculator(5, 3, '^')); // Output: Invalid operator


///////////////////////////////
//SQL practice

/*
Sample Dataset
Imagine we have two tables: Employees and Departments.

Employees Table
employee_id	first_name	last_name	department_id	salary	hire_date
1	Alice	Johnson	1	60000	2018-03-15
2	Bob	Smith	2	55000	2019-07-22
3	Charlie	Davis	1	70000	2017-01-10
4	Diana	Brown	3	50000	2020-11-05
5	Evan	Wilson	2	65000	2016-09-30
Departments Table
department_id	department_name
1	Engineering
2	Marketing
3	Sales

*/
//Write a query to select the first name, last name, and salary of employees who earn more than 60000.
SELECT first_name, last_name, salary 
FROM Employees
WHERE salary > 60000;

//Calculate the average salary for each department.
SELECT department_id, AVG(salary) AS average_salary
FROM Employees
GROUP BY department_id;

//List each employee’s full name along with their department name.
SELECT CONCAT(first_name, ' ', last_name) AS full_name, department_name
FROM Employees
JOIN Departments ON Employees.department_id = Departments.department_id;

// Find the employees who earn more than the average salary of their department.
SELECT first_name, last_name, salary, department_id
FROM Employees
WHERE salary > (
  SELECT AVG(salary)
  FROM Employees
  WHERE department_id = Employees.department_id
);

//Retrieve all employees hired after January 1, 2018, and order the results by hire date in ascending order.
SELECT employee_id, first_name, last_name, hire_date
FROM Employees
WHERE hire_date > '2018-01-01'
ORDER BY hire_date ASC;

//Find the departments that have more than one employee.
SELECT department_id, COUNT(employee_id) AS employee_count
FROM Employees
GROUP BY department_id
HAVING COUNT(employee_id) > 1;

//Increase the salary of all employees in the Marketing department by 10%. Assume the department_id for Marketing is 2.
UPDATE Employees
SET salary = salary * 1.10
WHERE department_id = 2;

//Delete all employees from the Sales department. Assume the department_id for Sales is 3.
DELETE FROM Employees
WHERE department_id =3;

//Write a function that takes a string and returns the string reversed.
function reverseString(str) {
  return str.split('').reverse().join('');
}

