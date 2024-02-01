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

}


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


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
