// Import the crypto module
const crypto = require('crypto');

// Get the commands using process.argv
const args = process.argv.slice(2);
const operation = args[0];
const numbers = args.slice(1).map(Number);

// Define a function to generate a random number of the specified length
const generateRandomNumber = (length) => {
  if (!length) {
    console.log("Provide length for random number generation.");
    return;
  }
  const randomBytes = crypto.randomBytes(length);
  console.log(randomBytes.toString('binary'));
};

// Perform the appropriate calculation based on the operation
switch (operation) {
  case 'add':
    if (numbers.length !== 2) {
      console.log("Invalid number of arguments for addition. Please provide exactly 2 numbers.");
    } else {
      console.log(numbers[0] + numbers[1]);
    }
    break;
  
  case 'sub':
    if (numbers.length !== 2) {
      console.log("Invalid number of arguments for subtraction. Please provide exactly 2 numbers.");
    } else {
      console.log(numbers[0] - numbers[1]);
    }
    break;

  case 'mult':
    if (numbers.length !== 2) {
      console.log("Invalid number of arguments for multiplication. Please provide exactly 2 numbers.");
    } else {
      console.log(numbers[0] * numbers[1]);
    }
    break;

  case 'divide':
    if (numbers.length !== 2) {
      console.log("Invalid number of arguments for division. Please provide exactly 2 numbers.");
    } else {
      if (numbers[1] === 0) {
        console.log("Cannot divide by zero.");
      } else {
        console.log(numbers[0] / numbers[1]);
      }
    }
    break;

  case 'sin':
    if (numbers.length !== 1) {
      console.log("Invalid number of arguments for sine. Please provide exactly 1 number.");
    } else {
      console.log(Math.sin(numbers[0]));
    }
    break;

  case 'cos':
    if (numbers.length !== 1) {
      console.log("Invalid number of arguments for cosine. Please provide exactly 1 number.");
    } else {
      console.log(Math.cos(numbers[0]));
    }
    break;

  case 'tan':
    if (numbers.length !== 1) {
      console.log("Invalid number of arguments for tangent. Please provide exactly 1 number.");
    } else {
      console.log(Math.tan(numbers[0]));
    }
    break;

  case 'random':
    if (numbers.length !== 1) {
      console.log("Invalid number of arguments for random number generation. Please provide exactly 1 number as length.");
    } else {
      generateRandomNumber(numbers[0]);
    }
    break;

  default:
    console.log("Invalid operation");
    break;
}