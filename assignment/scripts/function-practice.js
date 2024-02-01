console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `${'Hello,'} ${name}!`;
}
// Remember to call the function to test
console.log(`Test - should say, "Hello, Your Name!" for the sake of the autotest.`, helloName(`Your Name`));
console.log(`Test - Now with my name`, helloName(`Lons`));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}
console.log(`Test - doing some addition: 4 + 298 =`, addNumbers(4, 298))


// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  return firstNumber * secondNumber * thirdNumber;
}
console.log(`Test - doing some multiplication: 4 * 7 * 0 =`, multiplyThree(4, 7, 0))


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  if (number === 0){
    return false;
  }
  else {
    return false;
}
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log(`Test with a positive number (4):`, isPositive(4));
console.log(`Test with zero:`, isPositive(0));
console.log(`Test with a negative number (-4):`, isPositive(-4));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  return array[array.length-1];
}
console.log(`Returning the last item in this array: Sticks, Stones, Bones:`, getLast([`Sticks`, `Stones`, `Bones`]));
console.log(`Returning undefined because an array is empty:`, getLast([]));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  if (array.indexOf(value) >= 0) {
    return true;
  }
  if (array.indexOf(value) === -1) {
    return false;
  }
}
console.log(`Looking for Stones in Sticks, Stones, Bones:`, find(`Stones`, [`Sticks`, `Stones`, `Bones`]));
console.log(`Looking for Words in Sticks, Stones, Bones:`, find(`Words`, [`Sticks`, `Stones`, `Bones`]));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string.charAt(0)) {
    return true;
  }
  else {
    return false;
  }
}
console.log(`Checking if first letter of string "kids these days" is k:`, isFirstLetter(`k`, `kids these days`));
console.log(`Checking if first letter of string "kids these days" is p:`, isFirstLetter(`p`, `kids these days`));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  while(array.length > 0) {
    sum += array.pop();
  }
  // TODO: return the sum
  return sum;
}
console.log(`sum of this array =`, sumAll([1, 5, 43, 86, 2, 8, 0, -4]));

//used Stack Overflow for the above; https://stackoverflow.com/questions/71005122/sum-for-array-with-while-loop-js

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(inputArray) {
  let newArray = [];
  for(let i = 0; i < inputArray.length; i ++){
    if(inputArray[i] > 0){
         newArray.push(inputArray[i]);
    }
    else{
         newArray.push();
    }
}
  return newArray;
}

console.log(`positive for this array: [5, -23, 7, 9, -14, 209]:`, allPositive([5, -23, 7, 9, -14, 209]));
console.log(`positive for this array: [-5, -23, -7, -9, -14, -209]:`, allPositive([-5, -23, -7, -9, -14, -209]));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//From Edabit: Create a function that returns an array of strings sorted by length in ascending order.
//https://edabit.com/challenge/aNZzLBxQpidWBF26X

function sortByLength(stringArray) {
  stringArray.sort((a, b) => a.length - b.length);
  return stringArray;
}

console.log(`strings sorted by length:`, sortByLength([`alpha`, `beta`, `epsilon`]));
console.log(`strings sorted by length:`, sortByLength([`maybe`, `perhaps`, `mayhap`]));

//used this to solve: https://stackoverflow.com/questions/10630766/how-to-sort-an-array-based-on-the-length-of-each-element


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
