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
