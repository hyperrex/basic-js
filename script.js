// Define a function called `difference` that takes two numbers as arguments and returns their difference.
const difference = function(num1, num2){
  return num1 - num2;
};

// Define a function called `isEqual` that takes two arguments and returns a boolean. 
// Return true if the two arguments are equal and return false if they are not.
const isEqual = function(thing1, thing2){
  return thing1 === thing2; 
};

// Define a function called `isEven` that takes an arbitrary whole number as an argument and return a boolean.
// Return true if the number is even and false if it is not.
const isEven = function(num){
  return num % 2 === 0;
};

// Define a function called `isDivisible` that takes two arguments and returns a boolean.
// Return true if the first argument is divisible by the second; otherwise, return false.
const isDivisible = function(arg1, arg2){
  return arg1 % arg2 === 0;
};

// Define a function called `discountPercentage` that returns the total discount ($),
// given the original amount and discount percentage (as arguments).
// Return a warning that says "please enter a number between 0 and 100" if the discount amount is greater than 100 or less that 0 percent.
const discountPercentage = function(cost, disc){
  if (disc > 100 || disc < 0) {
    return 'please enter a number between 0 and 100';
  }
  return cost * (disc / 100);
};

// Define a function called `isVowel` that takes a letter and returns true if the letter is a vowel,
//and false if the letter is a consonant. (Treat 'y' as a consonant)
const isVowel = function(letter){
  if (letter.indexOf('a', 'e', 'i', 'o', 'u') === -1){
    return false;
  } else {
    return true;
  }
};

// Write code that converts a temperature in Celsius to Fahrenheit. 
// T(°F) = T(°C) × 1.8 + 32
const celsiusToFahrenheit = function(temp){
  return temp * 1.8 + 32;
};

// Define a function called `biggestOfThree` which takes three numbers as arguments, and returns the largest one.
const biggestOfThree = function(num1, num2, num3){
  return Math.max(num1, num2, num3);
};

// **Bonus**: Write a function that will estimate your federal income taxes.
// The function should take just one input: your salary (or future salary, once you graduate!).
// The link below has information on how federal income taxes are calculated:
const federalIncomeTaxCalculator = function(salary){
  // if (salary <= 9325) {
  // return 'Estimated federal income tax is: $' + (salary * 0.10).toFixed(2) + '.';
  // } else if (salary <= 37950) {
  //   return 'Estimated federal income tax is: $' + (salary * 0.15).toFixed(2) + '.';
  // } else if (salary <= 91900) {
  //   return 'Estimated federal income tax is: $' + (salary * 0.25).toFixed(2) + '.';
  // } else if (salary <= 191650) {
  //   return 'Estimated federal income tax is: $' + (salary * 0.28).toFixed(2) + '.';
  // } else if (salary <= 416700) {
  //   return 'Estimated federal income tax is: $' + (salary * 0.33).toFixed(2) + '.';
  // } else if (salary <= 418400) {
  //   return 'Estimated federal income tax is: $' + (salary * 0.35).toFixed(2) + '.';
  // } else {
  //   return 'Estimated federal income tax is: $' + (salary * 0.396).toFixed(2) + '.';
  // }
  
};

module.exports = {
  difference,
  isEqual,
  isEven,
  isDivisible,
  discountPercentage,
  isVowel,
  celsiusToFahrenheit,
  biggestOfThree,
  federalIncomeTaxCalculator
};
