/*
Week 1: JavaScript Fundamentals (Variables, Operators, Conditionals, Functions, Arrays, Objects)

Easy Challenges

N0 1. Temperature Converter
Write a function convertTemperature that takes a temperature in Celsius and converts it to Fahrenheit. The formula is:
Fahrenheit = (Celsius × 9/5) + 32

No 2. Even or Odd Checker
Write a function isEvenOrOdd that takes a number and returns "Even" if the number is even and "Odd" if it's odd.

No 3. String Reverser
Write a function reverseString that takes a string and returns it reversed without using the reverse() method.

No 4. BMI Calculator
Write a function calculateBMI that takes weight (kg) and height (m), then calculates and returns the BMI.

If BMI ≤ 18.5, return "Underweight"

If BMI ≤ 25, return "Normal"

If BMI ≤ 30, return "Overweight"

Otherwise, return "Obese"

No 5. Object Property Checker
Write a function hasProperty that takes an object and a property name (string), and returns true if the object has that property, otherwise false.

Medium Challenges

No 6. Grade Calculator
Write a function calculateGrade that takes a student's score (0-100) and returns their grade:

A (≥90), B (≥80), C (≥70), D (≥60), F (<60)

No 7. Array Sum & Average
Write a function sumAndAverage that takes an array of numbers and returns an object with two properties:

sum (total of all numbers)

average (average of the numbers)

No 8. Find the Longest Word
Write a function findLongestWord that takes a sentence (string) and returns the longest word in it. If there are multiple words of the same length, return the first one.

No 9. Object Merger
Write a function mergeObjects that takes two objects and returns a new object combining both. If there are overlapping keys, the second object's value should overwrite the first.

No 10. Password Validator
Write a function validatePassword that checks if a password meets the following criteria:

At least 8 characters long

Contains at least one uppercase letter

Contains at least one lowercase letter

Contains at least one number
Return true if valid, false otherwise.

Hard Challenges

No 11. Palindrome Checker
Write a function isPalindrome that checks if a given string is a palindrome (reads the same backward as forward, ignoring case and spaces).

No 12. Array Intersection
Write a function findIntersection that takes two arrays and returns a new array containing elements that appear in both.

No 13. Count Vowels & Consonants
Write a function countLetters that takes a string and returns an object with the count of vowels and consonants (ignoring case).

No.14. Employee Salary Calculator
Create an object employee with properties (name, baseSalary, bonusPercentage).
Write a method calculateTotalSalary that calculates the total salary (baseSalary + bonus).

No 15. FizzBuzz
Write a function fizzBuzz that prints numbers from 1 to 100, but:

For multiples of 3, print "Fizz"

For multiples of 5, print "Buzz"

For multiples of both, print "FizzBuzz"
*/

// SOLUTION
"use Strict";
console.log(`/////EASY CHALLENGES/////`);
console.log(`No 1 (COMPLETED)`); /////////
const convertTemperature = function (tempInCelcius) {
  fahrenheit = (tempInCelcius * 9) / 5 + 32;
  return `${fahrenheit}°F`;
};

console.log(convertTemperature(100));

console.log(`No 2 (COMPLETED)`); //////////
const isEvenOrOdd = number => {
  return number % 2 === 0 ? "Even" : "Odd";
};

console.log(isEvenOrOdd(44));

console.log(`No 3 (COMPLETED)`); //////////////
let reversed = "";
const reverseString = function (string) {
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
};

console.log(reverseString("taerg si doG"));

console.log(`No 4 (COMPLETED)`); ////////////////
function calculateBmi(weight, height) {
  const bmi = (weight / height ** 2).toFixed(1);
  console.log(bmi);
  if (bmi <= 18.5) {
    return `Underwight`;
  } else if (bmi <= 25) {
    return `Normal`;
  } else if (bmi <= 30) {
    return `Overweight`;
  } else {
    return `Obese`;
  }
}

console.log(calculateBmi(78, 1.69));

console.log(`No 5 (COMPLETED)`); // (COMPLETED)
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1999,
  job: "teacher",
  friends: ["Michael", "Steven", "Peter"],
};

const hasProperty = (object, propName) => {
  for (let i = 0; i < propName.length; i++) {
    object[propName[i]] = propName[propName[i]];
    if (object[propName]) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(hasProperty(jonas, "firstName"));

console.log(`/////MEDIUM CHALLENGES/////`);
console.log(`No 6 (COMPLETED)`); /////////////
function calculateGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(calculateGrade(59));

console.log(`No 7 (COMPLETED)`); ////////////////
const sumAndAverage = function (arr) {
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    avg = sum / arr.length;
  }
  return (arr = { sum: avg });
};

const scores = [72, 71, 37];
console.log(sumAndAverage(scores));

console.log(`No 8 (Completed)`); /////////////
function longestWord(sentence) {
  let words = sentence.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

const convo = "I am headed to your place";
console.log(longestWord(convo));

console.log(`No 9 (COMPLETED)`);
const mergeObjects = function (obj1, obj2) {
  newObject = {};
  const tempArray = Object.keys(obj1);
  const tempArray2 = Object.keys(obj2);
  for (let i = 0; i < tempArray.length; i++) {
    for (let j = 0; j < tempArray2.length; j++) {
      newObject[tempArray[i]] = obj1[tempArray[i]];
      newObject[tempArray2[j]] = obj2[tempArray2[j]];
      if (tempArray[i] === tempArray2[j]) continue;
      {
        newObject[tempArray2[j]] = obj2[tempArray2[j]];
      }
    }
  }
  return newObject;
};

const mrJonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1999,
  job: "teacher",
  friends: ["Michael", "Steven", "Peter"],
  driversLicense: true,
};

const mySelf = {
  fullName: "Michael Nwankwo",
  birthYear: 1999,
  job: "Programer",
  hobby: "Music",
};

console.log(mergeObjects(mrJonas, mySelf));

console.log(`No 10 (COMPLETED)`); //  ////////////////
const lenChecker = function (input) {
  return input.length >= 8;
};

const hasUpper = function (phrase) {
  for (let i = 0, len = phrase.length; i < len; i++) {
    if (phrase[i] === phrase[i].toUpperCase()) {
      return true;
    }
  }
  return false;
};

const hasLower = function (phrase) {
  for (let i = 0, len = phrase.length; i < len; i++) {
    if (phrase[i] === phrase[i].toLowerCase()) {
      return true;
    }
  }
  return false;
};

const hasNum = function (phrase) {
  for (let i = 0, len = phrase.length; i < len; i++) {
    if (phrase[i] >= 0 && phrase[i] <= 9) {
      return true;
    }
  }
  return false;
};

const validatePassword = function (password) {
  if (
    hasUpper(password) &&
    hasLower(password) &&
    hasNum(password) &&
    lenChecker(password)
  ) {
    return true;
  } else {
    return false;
  }
};

const passWord = "passW0rd";
console.log(validatePassword(passWord));

console.log(`/////HARD CHALLENGES/////`);
console.log(`No 11 (COMPLETED)`);
const isPalindrome = function (phrase) {
  let reversedPhrase = "";
  let tempPhrase = phrase.trim().toLowerCase();
  for (let i = tempPhrase.length - 1; i >= 0; i--) {
    reversedPhrase += tempPhrase[i];
  }
  result = reversedPhrase === phrase.trim().toLowerCase() ? "true" : "false";
  return result;
};

console.log(isPalindrome("121"));

console.log(`No 12 (COMPLETED)`); /////////////
const findIntersection = function (arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] !== arr2[j]) continue;
      {
        let temp = arr2[j];
        newArr.push(temp);
      }
    }
  }
  return newArr;
};
const male = [12, 26, "Handsome", 1999];
const female = [10, 18, "Beutiful", 1999];

console.log(findIntersection(male, female));

console.log(`No 13 (COMPLETED)`); /////////////(IN PROGRESS)
const countLetters = function (s) {
  let count = {};
  let vowelsCount = 0;
  let consonantCount = 0;
  for (let i = 0, len = s.length; i < len; i++) {
    if (
      s[i].toLowerCase() === "a".toLowerCase() ||
      s[i].toLowerCase() === "E".toLowerCase() ||
      s[i].toLowerCase() === "I".toLowerCase() ||
      s[i].toLowerCase() === "O".toLowerCase() ||
      s[i].toLowerCase() === "U".toLowerCase()
    ) {
      count["vowels"] = ++vowelsCount;
    } else {
      count.consonant = ++consonantCount;
    }
  }
  // return `Vowels: ${vowelsCount} Consonant: ${consonantCount}`;
  return count;
};

console.log(countLetters("JavaScript"));

console.log(`No 14 (COMPLETED)`); /////////////
const employee = {
  name: "Jonas Schmedtmann",
  baseSalary: 200000,
  bonusPercentage: 10,
  calculateTotalSalary: function () {
    const bonus = (this.baseSalary / 100) * this.bonusPercentage;
    return bonus + this.baseSalary;
  },
};

console.log(`Total Salary: ${employee.calculateTotalSalary()}`);

console.log(`No 15 (COMPLETED)`); // This function Parameter is an Array ranging from 1-100
const fizzBuzz = function (wholeNumbers) {
  for (let i = 0; i < wholeNumbers.length; i++) {
    if (wholeNumbers[i] % 3 === 0 && wholeNumbers[i] % 5 === 0) {
      console.log(`FizzBuzz`);
    } else if (wholeNumbers[i] % 3 === 0) {
      console.log(`Fizz`);
    } else if (wholeNumbers[i] % 5 === 0) {
      console.log(`Buzz`);
    } else {
      console.log(wholeNumbers[i]);
    }
  }
};

const oneToHundred = [];
let i = 0;
while (i < 100) {
  oneToHundred[i] = i + 1;
  i++;
}

fizzBuzz(oneToHundred);
